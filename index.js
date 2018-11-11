const server = require("./server/server");

const connect = require("./server/connectDB/connectDB");
const {port} = require("./server/config/config");

server(port);
connect();

