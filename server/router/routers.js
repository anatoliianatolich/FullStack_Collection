const express = require("express");
const router = express.Router();
const handlerUser = require("./controllers/handlerUser");
const handlerTask = require("./controllers/handlerTask");
const handlerME = require("./controllers/handlerME");
const authenticated = require('./method/authenticated');

router
    .use('/auth', handlerUser)
    .use("/", authenticated)
    .use("/users", handlerME)
    .use("/tasks", handlerTask)

module.exports = router;

