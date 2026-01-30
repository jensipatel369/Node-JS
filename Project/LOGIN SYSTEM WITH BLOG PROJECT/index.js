const express = require("express");
const port = 2312;
const path = require("path");

const app = express();
const db = require("./config/db");
const cookie = require("cookie-parser");
const passport = require("passport")
const session = require("express-session")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")));

app.use(cookie());
app.use(
    session({
        name: "local",
        secret: "rnw",
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 100 * 100 * 60, httpOnly: true }
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server running on port ${port}`);
})