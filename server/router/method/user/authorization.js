const config = require('../../../config/config');
const User = require('../../../connectDB/Schema/user');
const bcrypt = require("bcrypt");

const authorizations = (req, res, next) => {
    console.log(req.body);
    if(!req.body.email || !req.body.password){
        return res.sendStatus(400);
    } else {
        let { email, password } = req.body;

        User.findOne({ email: email})
            // .select('user')
            // .select('email')
            // .select('password')
            .exec((err, user) => {
                console.log(user);
                if(err) return res.sendStatus(500);
                console.log(user);
                if(!user){return res.sendStatus(401)};
                    bcrypt.compare(password, user.password, (err, valid) => {
                    if(err) {
                        console.log("не пройшов валідацію");
                        return res.sendStatus(500)

                    }
                    if (!valid){ return res.sendStatus(401)}
                    req.user = user;
                    res.writeHead(200, {"content-type":"application/json"}).send(user);
                    // next()
                });
            })
    }
    next();
}

module.exports = authorizations;
