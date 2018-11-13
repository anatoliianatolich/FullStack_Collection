const express = require("express");
const routers = express.Router();
const mainPage = require("./method/mainPage");
const registration = require("./method/registration");
const authorization = require("./method/authorization");
const authorizations = require("./method/authorizations");


routers
    .get("/", mainPage)
    .get("/sign-in", authorization)
    .post("/sign-up", registration)
    .post("/sign-in", authorizations)


module.exports = routers;