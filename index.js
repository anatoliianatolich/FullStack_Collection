const server = require("./server/server");
const connectDB = require("./server/connectDB/conn");

const port = 5050;
const db = "mongodb://Anatolich:test987654321@ds143893.mlab.com:43893/registration";

server(port);
connectDB(db);