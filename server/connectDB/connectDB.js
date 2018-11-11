const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect('mongodb://Anatolich:test987654321@ds143893.mlab.com:43893/registration', { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', ()=> {
        console.log('error connect db');
    });
    db.once("open", ()=> {
        console.log("connect db");
    })
}

module.exports = connect;

