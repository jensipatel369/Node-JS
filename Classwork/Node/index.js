const express = require("express");
const port = 2312;

const app = express()

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port : ${port}`);
})