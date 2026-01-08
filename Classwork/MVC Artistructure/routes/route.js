const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const multer = require("../middlewares/multer"); 

route.get("/",ctl.firstPage);
route.post("/addData",multer,ctl.addData);
route.get("/deleteData",ctl.deleteData);
route.get("/editData",ctl.editData);
route.post("/updateData",multer,ctl.updateData);

module.exports = route;