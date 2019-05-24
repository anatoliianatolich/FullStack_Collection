const express = require("express");
const app = express();
const serverIO = require('http').Server(app)
const io = require("socket.io")(serverIO);
const config = require("./config/config");

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/routers");
const handlerError = require("./util/handlerError");
const addError = require("./util/addError");

const log = (req, res, next) => {
    console.log(req.url, req.method, `${Date.now()}`);
    next();
}

const server = port => {
    console.log(config);
    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
    app
        .use(cors(corsOptions))
        .use(log)
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        // .use(express.session({
        //     secret:config.sesio
        // }))
        .use(router)
        .use(addError, handlerError); // не зовсім коректна перевірка на відсутність роута як може спрацювати у випадку запиту до бази

    io.on("connection", function(socket) {
        console.log("a user connected");
        setInterval(()=>{
            console.log("emitsend", new Date());
            socket.emit('news', {user:"connectChat", time: new Date()});
        },25000)
        socket.emit('news', {user:"connectChat"});
        socket.on("post", client => {
            console.log("new_visitor", client);
        });

        socket.on("disconnect", function() {
             console.log("user disconnected");
        });
    });


    serverIO.listen(port, () => {
        console.log('url: http//localhost:', port)
    })
};





// curl --url https://localhost:5050/test
// curl --url https://localhost:5050/test -v
// curl --url https://localhost:5050/test -v -k

module.exports = server;
