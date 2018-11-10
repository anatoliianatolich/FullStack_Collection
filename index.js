const server = require("./server/server");
const connectDB = require("./server/connectDB/conn");

const port = 5050;

server(port);
connectDB(db);
