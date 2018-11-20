const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');
const bcrypt = require("bcrypt");

const authorizations = (req, res, next) => {
    console.log(req.body);
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
                    console.log(valid);
                    if(err) {
                        return res.sendStatus(500)
                    }
                    console.log(2);
                    if (!valid){ return res.sendStatus(401)}
                    var token = jwt.encode({userName: userName}, config.secret);
                    res.writeHead(200,{});
                });
            })
    }
}

module.exports = authorizations;