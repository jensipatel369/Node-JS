const Schema = require("../model/firstSchema");
const fs = require("fs");

module.exports.firstPage = async(req, res) => {
    let data = await Schema.find();
    res.render("add",{data});
}
module.exports.addData = async (req, res) => {
    req.body.image = req.file.path;
    await Schema.create(req.body).then(()=>{
        res.redirect("/");
    })
}
module.exports.deleteData = async (req, res) => {
    let singleData = await Schema.findById(req.query.id);
    fs.unlinkSync(singleData.image);
    await Schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/");
    })
}
module.exports.editData = async (req, res) => {
    let singleData = await Schema.findById(req.query.id);
    res.render("edit",{singleData});
}
module.exports.updateData = async (req, res) => {
    let singleData = await Schema.findById(req.body.id);
    let img = "";

    req.file ? img = req.file.path : img = singleData.image;
    req.file && fs.unlinkSync(singleData.image);

    req.body.image = img;

    await Schema.findByIdAndUpdate(req.body.id, req.body).then(()=>{
        res.redirect("/");
    })
}
