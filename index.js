const server = require("./server/server");

const {connectMongo} = require("./server/connectDB/connectDB");
const {port} = require("./server/config/config");


server(port);
connectMongo();

