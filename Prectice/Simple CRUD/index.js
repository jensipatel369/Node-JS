const express = require("express")
const port = 2312
const app = express();

// EJS
app.set("view engine","ejs")
app.use(express.urlencoded({extends:true}))

let data = []

app.get("/", (req, res) => {
    res.render("add", { data })
})
app.post("/addData",(req,res)=>{
    let obj = {
        id : Date.now(),
        ...req.body
    }
    data.push(obj)
    res.redirect("/")
})
app.get("/deleteData/:id",(req,res)=>{
    let newData = data.filter((item)=>item.id != req.params.id)
    data = newData;
    res.redirect("/")
})
app.get("/editData",(req,res)=>{
    let singleData = data.find((item)=>item.id == req.query.id)
    res.render("edit",{singleData})  
})
app.post("/updateData",(req,res)=>{
    let singleData = data.find((item)=>item.id == req.body.id)
    singleData.name = req.body.name
    singleData.age = req.body.age
    singleData.city = req.body.city
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server port number is ${port}`)
})