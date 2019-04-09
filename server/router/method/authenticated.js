const jsonwebtoken = require("jsonwebtoken");
const ENV = "secret";

module.exports = (req, res) => {
    let {user} = req.body;
    const token  = jsonwebtoken.sign(req, ENV, {expiresIn: '72h'});

    user.token = token;
    console.log(user);
    res.status(200).send("user");
}