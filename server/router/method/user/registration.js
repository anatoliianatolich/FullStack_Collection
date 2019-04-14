const User = require("../../../connectDB/Schema/user");
const jwt = require('jsonwebtoken');

const registration = (req, res, next) => {
    console.log(req.body);
    const {password} = req.body;
    let {email, name} = req.body;

    if (!email) {
        return res.send(400,{
            success: false,
            message: 'Error: Email cannot be blank'
        })
    }
    if (!name) {
        return res.send(400,{
            success: false,
            message: 'Error: userName cannot be blank'
        })
    }
    if (!password) {
        return res.send(400,{
            success: false,
            message: 'Error: password cannot be blank'
        })
    }

    email = email.toLowerCase().trim();
    name = name.trim();

    const newUser = new User();

    newUser.email = email;
    newUser.name = name;
    newUser.password = newUser.generateHash(password);

    newUser.save((err, user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        console.log(user);
        req.dataUser = user;
        next();
    });
}

module.exports = registration
