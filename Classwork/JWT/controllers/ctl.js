const userSchema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jsonwebtoken");

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

module.exports.login = async (req, res) => {
        let user = await userSchema.findOne({email: req.body.email});

        if(!user){
            return res.json({msg: "User not registered"});
        }

        if(await bcrypt.compare(req.body.password, user.password)){
            let token = jwt.sign({user : user}, "rnw", {expiresIn: '1h'});
            res.json({msg: "Login successful", user: user, token: token});
        } else {
            res.json({msg: "Password is invalid"});
        }
}

module.exports.profile = (req, res)=>{
    res.json({user: req.user});
}