const Schema = require("../model/firstSchema")

module.exports.addData = async (req, res) => {
    await Schema.create(req.body).then((data) => {
        res.json({ "msg": "Data Added Successfully", "data": data })
    })
}

module.exports.getData = async (req, res) => {
    await Schema.find({}).then((data) => {
        res.json({ "data": data })
    })
}

module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({ "msg": "Data Deleted Successfully", "data": data })
    })
}

module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.query.id, req.body).then((data) => {
        res.json({ "msg": "Data Updated Successfully", "data": data })
    })
}