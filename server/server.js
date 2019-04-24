const https = require('https');
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
// const io = require("socket.io")();

const router = require("./router/routers");
// const {portSocket}= require("./config/config");
const handlerError = require("./util/handlerError");
const addError = require("./util/addError");

const log = (req, res, next) => {
    console.log(req.url, req.method, `${Date.now()}`);
    next();
}

const server = port => {

app
    .use(cors())
    .use(log)
    // .use(bearerToken)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    .use(addError, handlerError); // не зовсім коректна перевірка на відсутність роута як може спрацювати у випадку запиту до бази


https.createServer({
        key: fs.readFileSync("server/config/ssl_key/server.key"),
        cert: fs.readFileSync("server/config/ssl_key/server.cert")

    }, app).listen(port, () => {
            console.log('url: https//localhost:',port);
        }
    )
};
// io.on('conection', (client)=> {
//     client.on('subscribeToTimer', (interval)=> {
//         console.log(" client is interval listen in ",interval);
//         setInterval(()=> {
//             client.emit('timer', new Date());
//         }, interval)
//     })
// })
//
// io.listen(portSocket);
// console.log('listening on port ', portSocket);

module.exports = server;
