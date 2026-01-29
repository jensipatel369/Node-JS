const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("ReactAdmin", Schema);
module.exports = firstSchema;
