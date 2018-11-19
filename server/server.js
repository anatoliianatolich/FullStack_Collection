const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/routers");


const server = port => {

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use("/", router)
    // .use(errorHandler)
    .listen(port, ()=> {
        console.log("server listen port" + port);
    });
}


module.exports = server;
