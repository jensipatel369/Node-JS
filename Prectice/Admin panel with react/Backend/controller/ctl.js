const Schema = require("../model/schema")

module.exports.addData = async (req, res) => {
    await Schema.create(req.body).then((data) => {
        res.json({ "msg": "Data added successfully..!", "data": data })
    })
}
module.exports.getData = async (req, res) => {
    await Schema.find({}).then((data) => {
        res.json({ "data": data });
    });
}
module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({ "msg": "Data deleted sccessfully...!", "data": data })
    })
}
module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body._id, req.body).then((data) => {
        res.json({ "msg": "Data updated sccessfully...!", "data": data })
    })
}