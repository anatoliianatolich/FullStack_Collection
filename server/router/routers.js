const express = require("express");
const router = express.Router();
const handlerUser = require("./controllers/handlerUser");
const handlerTask = require("./controllers/handlerTask");
const authenticated = require('./method/authenticated');

router
    .use('/auth', handlerUser)
    .use("/", authenticated)
    .use("/task", handlerTask)

module.exports = router;

