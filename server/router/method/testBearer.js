// const bearer = require("express-bearer-token");

module.exports = (req,res) => {
    console.log(req.headers.authorization);
    console.log(typeof req.headers.authorization);

    const cleanToken = req.headers.authorization.split(' ')[1];
    res.send(200, cleanToken)
}

