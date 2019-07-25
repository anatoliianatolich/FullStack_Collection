const mongoose = require("mongoose");
const {Schema} = mongoose;

const ChatMessageSchema = new Schema({
    id_chat: String,
})

module.exports = mongoose.model('chatMessage', ChatMessageSchema, 'task');