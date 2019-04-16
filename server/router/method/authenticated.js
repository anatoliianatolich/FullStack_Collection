const jsonwebtoken = require("jsonwebtoken");
const { secret } = require("../../config/config");

module.exports = (req, res) => {


    console.log(secret);
    console.log("user",  req.dataUser);
    let user = req.dataUser;
    const token  = jsonwebtoken.sign(req.dataUser, secret, {expiresIn: '72h'});
    user.token = token;
    console.log(5);
    res.status(200).send(user);
}