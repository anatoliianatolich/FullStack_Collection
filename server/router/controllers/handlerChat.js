const express = require("express");
const handlerChat = express.Router();
const getMessage = require('../method/chat/getChat')
const addMessage = require('../method/chat/addChat')

handlerChat
    .get('/chat', getMessage)
    .post('/chat', addMessage)

module.exports = handlerChat;
