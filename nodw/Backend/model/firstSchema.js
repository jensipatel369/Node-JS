const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dur: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("crud",Schema)
module.exports = firstSchema