const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');
const bcrypt = require("bcrypt");

const authorizations = (req, res) => {
    if(!req.body.username || !req.body.password){
        return res.sendStatus(400);
    } else {
        let {username, password} = req.body;

        User.findOne({userName: username})
            .select('password')
            .exec((err, user) => {
                if(err) return res.sendStatus(500);
                if(!username){return res.sendStatus(401)};
                bcrypt.compare(password, user.password, (err, valid) => {
                    console.log(valid);
                    if(err) {
                        return res.sendStatus(500)
                    }
                    console.log(2);
                    if (!valid){ return res.sendStatus(401)}
                    var token = jwt.encode({username: username}, config.secret);
                    console.log(token);

                    res.send(token)
                })
            })
    }
}

module.exports = authorizations;