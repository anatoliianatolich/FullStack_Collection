const User = require('../../../connectDB/Schema/user');
const bcrypt = require("bcrypt");

const {CreateUser} = require("../../../helper/constructObject")

const authorizations = (req, res, next) => {
    // console.log(req.body);
    // console.log(1);
    if(!req.body.email || !req.body.password){
        return res.sendStatus(400);
    } else {
        let { email, password } = req.body;
        console.log(email, password);
        User.findOne({ email: email})
        .select('name')
        .select('email')
        .select('password')
            .exec((err, user) => {
                console.log(user);

                const result = CreateUser(user);
                console.log("module auditObject", result);
                if(err) return res.sendStatus(500);
                if(!result){return res.sendStatus(401)};

                bcrypt.compare(password, result.password, (err, valid) => {
                    if(err) {
                        console.log("не пройшов валідацію");
                        return res.sendStatus(500);

                    }
                    console.log(valid)
                    if (!valid) return res.sendStatus(401);
                    req.dataUser = result;
                    next()
                });
            })
    }
}

module.exports = authorizations;
