const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BackendAll");

const db = mongoose.connection;

db.once("open", (err) => {
  err ? console.log(err) : console.log(`bb started successfully`);
});

module.exports = db;