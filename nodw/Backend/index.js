const express = require("express")
const port = 2312

const app = express()
const cors = require("cors")
const db = require("./config/db")

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use("/",require("./router/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Is Started:",port);
})