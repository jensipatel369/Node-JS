const express = require("express");
const port = 2312;

const app = express();
const path = require("path");

// Set EJS as templating engine
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));

let data = []

app.get("/", (req, res) => {
    res.render("index", { data })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`);
})
