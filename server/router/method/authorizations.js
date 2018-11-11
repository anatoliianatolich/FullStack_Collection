const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');

const authorizations = (req, res, next) => {
    if(!req.body.userName || !req.body.password){
        return res.sendStatus(400);
    } else {
        let username = req.body.username
        let password = req.body.password
        User.findOne({userName: username})
            .select('password')
            .exec((err, user) => {
                if(err) return res.sendStatus(500);
                if(!user){return res.sendStatus(401)}
                bcrypt.compare(password, user.password, (err, valid) => {
                    if(err) {
                        return res.sendStatus(500)
                    }
                    if (!valid){ return res.sendStatus(401)}
                    var token = jwt.encode({username: username}, config.secret);
                    res.send(token)
                })
            })
    }
}

module.exports = authorizations;