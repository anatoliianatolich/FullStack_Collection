const Registration = require("../../connectDB/Schema/registration");
const jwt = require('jwt-simple');
const config = require('../../config/config')


const registration = (req, res) => {
    console.log(req);
    const {password} = req.body;
    let {email, userName} = req.body;
    console.log(email, userName, password);
    if (!email) {
        return res.send(400,{
            success: false,
            message: 'Error: Email cannot be blank'
        })
    }
    if (!userName) {
        return res.send({
            success: false,
            message: 'Error: userName cannot be blank'
        })
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password cannot be blank'
        })
    }
    email = email.toLowerCase().trim();
    userName = userName.trim();

    Registration.find({
            email: email
        },
        (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Server: error server'
                })
            } else if (previousUsers > 0) {
                return res.send({
                    success: false,
                    message: 'Email: already exists'
                });
            }
        });

    const newUser = new Registration();

    newUser.email = email;
    newUser.userName = userName;
    newUser.password = newUser.generateHash(password);
    const token1 = jwt.encode({userName: userName}, config.secret);
    console.log(1);
    newUser.save((err, user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return (
        res.status(200).send({
            success: true,
            message: `Signed up ${user.userName}, email: ${user.email}`,
            token: token1
        })
    );
    });
}

module.exports = registration;
