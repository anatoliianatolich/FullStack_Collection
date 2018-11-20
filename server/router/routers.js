const express = require("express");
const routers = express.Router();
const mainPage = require("./method/mainPage");
const getUsers = require("./method/user/getUsers");
const registration = require("./method/registration");
const authorization = require("./method/authorization");
const authorizations = require("./method/authorizations");


routers
    .get("/", mainPage)
    .get("/users", getUsers)
    .post("/sign-up", registration)
    .post("/sign-in", authorizations)
    .post("/test", (req,res) => {
        console.log(req.body);
        if(req.body.userName) return res.status(400);
        const test = req.body.userName
        res.status(200).send({"success":test})
    })
// .get("/sign-in", authorization)


module.exports = routers;