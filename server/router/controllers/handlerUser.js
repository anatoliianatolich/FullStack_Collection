const express = require("express");
const handlerUser = express.Router();

const registration = require("../method/user/registration");
const authorization = require("../method/user/authorization");


handlerUser
    .post('/register', registration, authorization)
    .post('/auth', authorization)

module.exports = handlerUser;