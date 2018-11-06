const express = require("express");
const routers = express.Router();
const mainPage = require("./method/mainPage");
const registration = require("./method/registration");



routers
    .get("/", mainPage)
    // .post("/sign-in", authorization)
    .post("/sign-up", registration)

module.exports = routers;