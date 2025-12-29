const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/NodeGIM")

const db = mongoose.connection;

db.once("open", () => {
    console.log("Db is connected successfully");
});

module.exports = db;