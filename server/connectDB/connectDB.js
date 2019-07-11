const mongoose = require("mongoose");
const {DB} = require('../config/config');

module.exports.connectMongo = () => {
    mongoose.connect(`${DB}`, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', ()=> {
        console.log('error connect db');
    });
    db.once("open", ()=> {
        console.log("connect db");
    });
}

module.exports.connectSql = () => {
    this.connection = mysql.createConnection(sql);

}




