const express = require("express")

const route = express.Router()
const ctl = require("../controller/ctl")

route.get("/getData",ctl.getData)
route.post("/addData",ctl.addData)
route.delete("/deleteData",ctl.deleteData)
route.put("/updateData",ctl.updateData)

module.exports = route