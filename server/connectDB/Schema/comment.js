const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: String,
    comment: String,
    date: {
        type: Date,
        default: Date.now
    },
    update: Boolean,
});

module.exports = mongoose.model('task', taskSchema);
