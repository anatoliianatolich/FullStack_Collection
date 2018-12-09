const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');
const bcrypt = require("bcrypt");

const authorizations = (req, res, next) => {
    if(!req.body.userName || !req.body.password){
        return res.sendStatus(400);
    } else {
        let {userName, password} = req.body;

        User.findOne({userName: userName})
            .select('password')
            .exec((err, user) => {
                if(err) return res.sendStatus(500);
                if(!user){return res.sendStatus(401)};
                    bcrypt.compare(password, user.password, (err, valid) => {
                    if(err) {
                        return res.sendStatus(500)
                    }
                    if (!valid){ return res.sendStatus(401)}
                    var token = jwt.encode({userName: userName}, config.secret);
                    res.status(200).send({token: token, role: user.role});
                });
            })
    }
}

module.exports = authorizations;