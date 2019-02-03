const express = require("express");
const router = express.Router();
const mainPage = require("./method/mainPage");
const getUsers = require("./method/user/getUsers");
const registration = require("./method/registration");
const authorization = require("./method/authorization");
const {auditUser} = require("./method/user/auditUser");
const admin = require("./controllers/admin")

const audit = require("../router/method/user/auditUser");

router
    .get("/", mainPage)
    .get("/users", getUsers)
    .use("/admin", admin)
    .post("/sign-up", auditUser, registration)
    .post("/sign-in", authorization)
    .post("/testUser", auditUser)
    
module.exports = router;

