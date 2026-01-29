const Schema = require("../model/schema")

module.exports.login = (req, res) => {
    res.render("login");
}
module.exports.loginAdmin = async (req, res) => {
    res.redirect("/dashboard");
}
module.exports.logout = (req, res) => {
    res.clearCookie()
    res.redirect("/");
}

module.exports.dashboard = (req, res) => {
    res.render("dashboard");
}

module.exports.addAdmin = (req, res) => {
    res.render("addAdmin");
}
module.exports.addAdminData = async (req, res) => {
    const data = await Schema.create(req.body)
    console.log("Data Added Successfully...!");
    res.render("addAdmin");
}

module.exports.viewAdmin = async (req, res) => {
    const data = await Schema.find({});
    res.render("viewAdmin", { data });
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id)
    console.log("Data Deleted Successfully...!");
    res.redirect("/viewAdmin");
}

module.exports.editData = async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    res.render("editAdmin", { singleData });
}

module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.query.id, req.body)
    console.log("Data Updated Successfully...!");
    res.redirect("/viewAdmin")
}