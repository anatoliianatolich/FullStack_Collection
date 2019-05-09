const express = require("express");
const handlerME = express.Router();
const methodME = require("../method/user/methodME")

handlerME
    .get("/me", methodME)

module.exports = handlerME;