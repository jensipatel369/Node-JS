const express = require("express");
const port = 2312

const app = express();

const db = require("./config/db");
const schema = require("./model/firstSchema");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let data = await schema.find({});
    res.render("add", { data })
})
app.post("/addData", async (req, res) => {
    await schema.create(req.body).then(() => {
        res.redirect("/");
    })
})
app.get("/deleteData", async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/");
    })
})
app.get("/editData", async(req,res)=>{
    let singleData = await schema.findById(req.query.id)
    res.render("edit",{singleData});
})
app.post("/updateData", async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})