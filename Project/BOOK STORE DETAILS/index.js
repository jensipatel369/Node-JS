const express = require("express");
const port = 2312;

const app= express();

const db = require("./config/db")
const Schema = require("./model/firstSchema");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/",async(req,res)=>{
    const data = await Schema.find({});
    res.render("add",{data})
})
app.post("/addData",async(req,res)=>{
    await Schema.create(req.body);
    res.redirect("/");
})
app.get("/deleteData",async(req,res)=>{
    await Schema.findByIdAndDelete(req.query.id);
    res.redirect("/");
})
app.get("/editData",async(req,res)=>{
    const singleData = await Schema.findById(req.query.id);
    res.render("edit",{singleData})
})
app.post("/updateData",async(req,res)=>{
    await Schema.findByIdAndUpdate(req.body.id,req.body);
    res.redirect("/");
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})