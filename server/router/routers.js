const express = require("express");
const router = express.Router();
const mainPage = require("./method/mainPage");
const registration = require("./method/registration");
const authorization = require("./method/authorization");
const authorizations = require("./method/authorizations");


router
    .get("/", mainPage)
    .get("/users", mainPage)
    // .get("/sign-in", authorization)
    // .post("/sign-up", registration)
    // .post("/sign-in", authorizations)


module.exports = router;