const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// const io = require("socket.io")();

const router = require("./router/routers");
const {portSocket}= require("./config/config");
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
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    .use(addError, handlerError); // не зовсім коректна перевірка на відсутність роута як може спрацювати у випадку запиту до бази

app.listen(port, ()=> {
    console.log("server listen port" + port);
});
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
// curl --url https://localhost:5050/test
// curl --url https://localhost:5050/test -v
// curl --url https://localhost:5050/test -v -k

module.exports = server;
