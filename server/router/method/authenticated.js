const jsonwebtoken = require("jsonwebtoken");
const { secret } = require("../../config/config");
const {DeletePassUser} = require("../../helper/constructObject")

module.exports = (req, res) => {

    console.log("module authenticated");
    console.log("user",  req.dataUser);
    console.log(secret);
    console.log(typeof req.dataUser);
    let user = req.dataUser;
    const token  = jsonwebtoken.sign(req.dataUser, secret, {expiresIn: '72h'});
    user.token = token;
    const filterUser = DeletePassUser(user);
    console.log(8);
    res.status(200).send(filterUser);
}