const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    publisher : {
        type : String,
        require : true
    },
    Year : {
        type : Number,
        require : true
    },
    language : {
        type : String,
        require : true
    },
    stock : {
        type : Number,
        require : true
    },
    price : {
        type : Number,
        require : true
    }
})

const firstSchema = mongoose.model("BookDetails",Schema);
module.exports = firstSchema;