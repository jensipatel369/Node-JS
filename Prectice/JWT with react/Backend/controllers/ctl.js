const Schema = require("../model/userSchema");

module.exports.register = async (req, res) => {
    await Schema.create(req.body).then((data)=>{
        res.json({msg: "User registered successfully", data: data});
    })
}

module.exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Schema.findOne({ email: email, password: password });

    if(!user){
        res.json({msg:"User not registered", auth: false});
    }

    if(user.password !== password){
        res.json({msg:"Invalid password", auth: false});
    }else{
        res.json({msg:"Login successful", auth: true});
    }
}

