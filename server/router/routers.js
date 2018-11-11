const express = require("express");
const routers = express.Router();
const mainPage = require("./method/mainPage");
const registration = require("./method/registration");



routers
    .get("/", mainPage)
    .get("/sign-in", authorization)
    .post("/sign-up", registration)
    .post("/sign-up", authorizations);

module.exports = routers;