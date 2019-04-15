const express = require("express");
const handlerUser = express.Router();

const registration = require("../method/user/registration");
const authorization = require("../method/user/authorization");
const authenticated = require("../method/authenticated")

handlerUser
    .post('/register', registration, authenticated)
    .post('/local/login', authorization, authenticated)

module.exports = handlerUser;
