const express = require("express");
const port = 2312;

const app = express();

// app.get("/",(req,res)=>{
//     res.write("<h1>Hello <br> Welcome to Home Page...!</h1>");
//     res.end();
// })

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let data = [];

// Middleware
const middle = (req,res,next)=>{
    console.log("Hello, I am Middleware...")
    next();
}

app.get("/", (req, res) => {
    res.render("index", { data })
})
app.post("/addData",middle,(req, res) => {
    let obj = {
        id: Date.now(),
        ...req.body
    }
    data.push(obj);
    res.redirect("/");
})
app.get("/deleteData/:id", (req, res) => {
    let newData = data.filter((item) => item.id != req.params.id);
    data = newData;
    res.redirect("/");
})
app.get("/editData", (req, res) => {
    let singleData = data.find((item) => item.id == req.query.id);
    res.render("edit", { singleData });
})
app.post("/updateData", (req, res) => {
    singleData = data.find((item) => item.id == req.body.id);
    singleData.task = req.body.task;
    singleData.priority = req.body.priority;
    singleData.date = req.body.date;
    res.redirect("/");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})