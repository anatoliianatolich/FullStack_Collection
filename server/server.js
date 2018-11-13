const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routers = require("./router/routers");


const server = port => {

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use("/", routers)
    .use(errorHandler)
    .listen(port, ()=> {
        console.log("server listen port" + port);
    });
}

const errorHandler = (err, req, res)  => {
    console.error(err.stack);
    res.json(500).send('Something broke!');
};

module.exports = server;
