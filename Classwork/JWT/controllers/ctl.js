const userSchema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const moment = require("moment");

module.exports.register = async (req, res) => {
    let user = await userSchema.findOne({email: req.body.email});

    if(user) {
        return res.json({msg: "User already exists"});
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');

    await userSchema.create(req.body).then((data)=>{
        res.json({msg: "User registered successfully", user: data});
    })
}