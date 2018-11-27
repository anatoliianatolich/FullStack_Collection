const express = require("express");
const routers = express.Router();
const mainPage = require("./method/mainPage");
const getUsers = require("./method/user/getUsers");
const registration = require("./method/registration");
const authorization = require("./method/authorization");
const authorizations = require("./method/authorizations");
const {auditUser} = require("./method/user/auditUser");


routers
    .get("/", mainPage)
    .get("/users", getUsers)
    .post("/sign-up", auditUser, registration)
    .post("/sign-in", authorizations)
    .post("/testUser", auditUser)
    
module.exports = routers;