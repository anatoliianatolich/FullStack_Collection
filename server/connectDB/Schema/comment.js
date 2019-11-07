const mongoose = require("mongoose");
const {Schema} = mongoose;

const commentSchema = new Schema({
    author: String,
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    update: Boolean,
});

module.exports = mongoose.model('comment', commentSchema);
