const Registration = require("../../connectDB/Schema/registration");
const jwt = require('jwt-simple');


module.exports = (req, res, next) => {
    const {body} = req;
    const {password} = body;
    let {email, userName} = body;
    console.log(email, userName, password);
    if (!email) {
        return res.send({
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

    newUser.save((err, user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success: true,
            message: `Signed up ${user.userName}`
        });
    });
}

