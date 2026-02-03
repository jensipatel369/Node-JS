const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.post("/register", ctl.register);
route.post("/login", ctl.login);4
route.get("/profile", ctl.profile);

module.exports = route;