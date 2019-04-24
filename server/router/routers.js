const express = require("express");
const router = express.Router();
const handlerUser = require("./controllers/handlerUser");
const authenticated = require('./method/authenticated')
// const mainPage = require("./method/mainPage");
// const getUsers = require("./method/user/getUsers");
// const registration = require("./method/registration");
// const authorization = require("./method/authorization");
// const {auditUser} = require("./method/user/auditUser");
// const admin = require("./controllers/admin")

router
    .use('/auth', handlerUser)
    .get('/test',((req,res)=>{
        console.log(req.headers);
        res.send("good")}))
    .use("/", authenticated)


// const audit = require("../router/method/user/auditUser");
    // .use('/task', handlerTask)

module.exports = router;

