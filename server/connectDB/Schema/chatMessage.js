const mongoose = require("mongoose");
const {Schema} = mongoose;

const ChatMessageSchema = new Schema({
    id_chat: String,
    data_chat: [
        {
        name: String,
        date: Date,
        message: String,
    },
    ]
})

module.exports = mongoose.model('chatMessage', ChatMessageSchema, 'task');
