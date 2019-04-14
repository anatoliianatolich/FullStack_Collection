const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const io = require("socket.io")();

const router = require("./router/routers");
const {portSocket}= require("./config/config");
// const handlerError = require("./util/handlerError");
// const addError = require("./util/addError");



const server = port => {

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    // .use(addError, handlerError); // не зовсім коректна перевірка на відсутність роута як може спрацювати у випадку запиту до бази

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

module.exports = server;
