const express = require("express");
const port = 2312

const app = express();
const db = require("./config/db");
const schema = require("./model/firstSchema");
const multer = require("./middlewares/multer");
const path = require("path"); // path module to handle file paths (image uploads)
const fs = require("fs"); // file system module to handle file operations (deleting images)

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.get("/", async (req, res) => {
    let data = await schema.find({});
    res.render("add", { data })
})
app.post("/addData",multer,async (req, res) => {
    req.body.image = req.file.path;
    await schema.create(req.body).then(() => {
        res.redirect("/");
    })
})
app.get("/deleteData", async (req, res) => {
    let singleData = await schema.findById(req.query.id);
    fs.unlinkSync(singleData.image);
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/");
    })
})
app.get("/editData", async(req,res)=>{
    let singleData = await schema.findById(req.query.id)
    res.render("edit",{singleData});
})
app.post("/updateData", multer, async(req,res)=>{
    // Update logic for image
    let singleData = await schema.findById(req.body.id);
    let img = "";

    req.file ? img = req.file.path : img = singleData.image;
    req.file && fs.unlinkSync(singleData.image);

    req.body.image = img;

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})