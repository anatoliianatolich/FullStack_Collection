const User = require("../../../connectDB/Schema/user");
const jwt = require('jsonwebtoken');

const registration = (req, res, next) => {
    console.log(req.body);
    const {password} = req.body;
    let {email, userName} = req.body;

    if (!email) {
        return res.send(400,{
            success: false,
            message: 'Error: Email cannot be blank'
        })
    }
    if (!userName) {
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
    userName = userName.trim();

    const newUser = new User();

    newUser.email = email;
    newUser.userName = userName;
    newUser.password = newUser.generateHash(password);

    newUser.save((err, user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        console.log(user)
        req.dataUser = {user, "token": token},
        next();
    });
}

module.exports = registration
