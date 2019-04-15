const jsonwebtoken = require("jsonwebtoken");
const { secret } = require("../../config/config");

module.exports = (req, res) => {
    let {user} = req.dataUser;
    const token  = jsonwebtoken.sign(req, secret, {expiresIn: '72h'});

    user.token = token;
    console.log(user);
    res.status(200).send("user");
}