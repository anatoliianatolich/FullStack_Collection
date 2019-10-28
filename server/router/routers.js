const express = require("express");
const router = express.Router();
const handlerUser = require("./controllers/handlerUser");
const handlerTask = require("./controllers/handlerTask");
const handlerME = require("./controllers/handlerME");
const handlerChat = require("./controllers/handlerChat")
const authenticated = require('./method/authenticated');
const handlerComment = require('./controllers/handlerComment')

router
    .use('/auth', handlerUser)
    .use("/", authenticated)
    .use("/users", handlerME)
    .use("/tasks", handlerTask)
    // .use("/chat", handlerChat)
    .use("/comment", handlerComment)

module.exports = router;

