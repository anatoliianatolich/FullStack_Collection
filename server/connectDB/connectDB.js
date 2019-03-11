const mongoose = require("mongoose");
const {DB} = require('../config/config');
mongoose.Promise = global.Promise;

const connect = () => {
    console.log(DB);
    mongoose.connect(`${DB}`, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', ()=> {
        console.log('error connect db');
    });
    db.once("open", ()=> {
        console.log("connect db");
    });
}

module.exports = connect;

