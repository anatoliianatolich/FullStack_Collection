const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE SCHEMA
const UserSchema = new Schema({
    password: {
        type: String
    },

    googleID: {
        type: String
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    },

});

mongoose.model("users", UserSchema);