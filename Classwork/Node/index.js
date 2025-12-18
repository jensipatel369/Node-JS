const express = require("express");
const port = 2312;

const app = express();

app.get("/",(req,res)=>{
    res.write("<h1>Hello <br> Welcome to Home Page...!</h1>");
    res.end();
})

app.get("/about",(req,res)=>{
    res.write("<h1>Welcome to About Page...!</h1>");
    res.end();
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})