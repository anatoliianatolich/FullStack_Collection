const jsonwebtoken = require("jsonwebtoken");
const { secret } = require("../../config/config");

module.exports = (req, res) => {

    let {user:{name, email, password}} = req.dataUser;
    console.log(secret);
    console.log("user", user);


    const token  = jsonwebtoken.sign(req, secret, {expiresIn: '72h'});
    user.token = token;
    console.log(5);
    res.status(200).send("user");
}