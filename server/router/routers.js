const express = require("express");
const router = express.Router();
const mainPage = require("./method/mainPage");
const getUsers = require("./method/user/getUsers");
const registration = require("./method/registration");
// const authorization = require("./method/authorization");
const authorizations = require("./method/authorizations");

const audit = require("../router/method/user/auditUser");



router
    .get("/", mainPage)
    .get("/users", getUsers)
    .post("/sign-up", audit.auditUser, registration)
    .post("/sign-in", authorizations)
    // .post("/delete", deleteUser)
    // .route("/test").post((req,res) => {
    //     console.log(req.body);
    //     const test = req.body.userName;
    //     res.status(200).send({"success":test});
    // res.end("test");
    // })
// .post("/find", (req,res)=> {
//     let {email} = req.body;
//     console.log(email);
//     email = email.trim().toLowerCase();
//     console.log(email);

//     users.find({email:email}, (err, docs)=>{
//         if(err) return;
//         console.log(docs);


//         res.send(200, docs);
//     })
//     console.log(1);
// })
// .get("/sign-in", authorization)


module.exports = router;