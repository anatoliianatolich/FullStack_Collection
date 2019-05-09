const express = require("express");
const handlerUser = express.Router();

const registration = require("../method/user/registration");
const authorization = require("../method/user/authorization");
const authenticated = require("../method/authenticated");
const methodME = require("../method/user/methodME")

handlerUser
    .post('/register', registration, authenticated)
    .post('/local/login', authorization, authenticated)

module.exports = handlerUser;
