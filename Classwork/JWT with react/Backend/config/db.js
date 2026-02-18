const mongoose = require("mongoose");

// For MongoDB Atlas
mongoose.connect("mongodb+srv://Jensi:Jensi369@cluster0.dcdkkix.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("db is connect");
}).catch((err)=>{
    console.log(err);
})


// For MongoDB Compass
// const db = mongoose.connection

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("Connected to the database successfully");
// })

// module.exports = db;