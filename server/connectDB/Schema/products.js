const mongoose = require("mongoose");

const Products = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }, 
    prise: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    picture: Buffer
  })