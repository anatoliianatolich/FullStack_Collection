// const https = require('https');
const express = require("express");
// const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const bearerToken = require("express-bearer-token");
const io = require("socket.io")(app);

const router = require("./router/routers");
const {portSocket}= require("./config/config");
const handlerError = require("./util/handlerError");
const addError = require("./util/addError");

const log = (req, res, next) => {
    console.log(req.url, req.method, `${Date.now()}`);
    next();
}

const server = port => {
    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
    app
        .use(cors(corsOptions))
        .use(log)
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(router)
        .use(addError, handlerError); // не зовсім коректна перевірка на відсутність роута як може спрацювати у випадку запиту до бази

    app.listen(port, () => {
        console.log('url: http//localhost:', port)
    })


// https.createServer({
//         key: fs.readFileSync("server/config/ssl_key/server.key"),
//         cert: fs.readFileSync("server/config/ssl_key/server.cert")
//
//     }, app).listen(port, () => {
//             console.log('url: https//localhost:',port);
//         }
//     )
};

// io.on('conection', (client)=> {
//     client.on('subscribeToTimer', ()=> {
//         console.log(" client is interval listen in ",1000);
//         setInterval(()=> {
//             client.emit('timer', new Date());
//         }, 1000)
//     })
// });
io.on('conection', (client)=> {
    setInterval(()=> {
        client.emit('timer', new Date());
    }, 1000)
});

io.listen(portSocket);

// io.on("connection", (socket)=>{
//     socket.emit("news", {hello:"world"});
//     socket.on("first", (data)=>{
//         console.log(data);
//     })
// })


console.log('Socket listen a port ', portSocket);



// curl --url https://localhost:5050/test
// curl --url https://localhost:5050/test -v
// curl --url https://localhost:5050/test -v -k

module.exports = server;
