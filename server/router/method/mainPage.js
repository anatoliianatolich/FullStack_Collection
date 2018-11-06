const fs = require("fs");

const mainPage = (req,res) => {
    res.status(200);
    res.json("hello");
}

module.exports = mainPage;