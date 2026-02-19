    // const express = require("express");
    // const port = process.env.PORT ||2312;

    // const app = express();
    // const db = require("./config/db");
    // const cors = require("cors");
    // const cookie = require("cookie-parser");
    // const session = require("express-session");

    // app.use(cookie());
    // app.use(session({
    //     name: "local",
    //     secret: "rnw",
    //     resave: false,
    //     saveUninitialized: false,
    //     cookie: {maxAge: 1000 * 100 * 60, httpOnly: true}
    // }))

    // app.use(express.urlencoded({ extended: true }));
    // app.use(cors({origin: "http://localhost:5173", credentials: true}));
    // app.use(express.json());

    // app.use("/", require("./routes/route"))

    // app.listen(port, (err) => {
    //     err ? console.log(err) : console.log(`Server is running on port ${port}`);
    // })

    const express = require("express");
const port = process.env.PORT || 2312;

const app = express();
const db = require("./config/db");
const cors = require("cors");
const cookie = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookie());

app.use(session({
    name: "local",
    secret: "rnw",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/your_db_name"
    }),
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/route"));

app.listen(port, (err) => {
    err ? console.log(err) :
    console.log(`Server running on port ${port}`);
});
