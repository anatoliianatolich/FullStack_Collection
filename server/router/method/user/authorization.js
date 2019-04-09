const config = require('../../../config/config');
const jwt = require('jsonwebtoken');
const User = require('../../../connectDB/Schema/user');
const bcrypt = require("bcrypt");

const authorizations = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.sendStatus(400);
    } else {
        let { email, password} = req.body;

        User.findOne({ email: email})
            .select('user','email', 'password')
            .exec((err, user) => {
                if(err) return res.sendStatus(500);
                if(!user){return res.sendStatus(401)};
                    bcrypt.compare(password, user.password, (err, valid) => {
                    if(err) {
                        return res.sendStatus(500)
                    }
                    if (!valid){ return res.sendStatus(401)}
                    req.user = user;
                    next()
                });
            })
    }
    next();
}

module.exports = authorizations;
