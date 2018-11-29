const users = require("../../connectDB/Schema/registration");
const jwt = require('jwt-simple');
const config = require('../../config/config')



const registration = (req, res) => {

    console.log("reg");
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

    const newUser = new users();

    newUser.email = email;
    newUser.userName = userName;
    newUser.password = newUser.generateHash(password);
    const token = jwt.encode({userName: userName}, config.secret);

    newUser.save((err, user) => {
        if (err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return (
            res.writeHead(200, {
                "success":`congratulation ${newUser.userName}`,
                "email":"newUser.email",
                ["Authorization"]: token
            })

            // res.status(200).send({
            //     "success":`congratulation ${newUser.userName}`,
            //     "email":newUser.email,
            //     ["Authorization"]: token
            // })
    );
    });
}

module.exports = registration;
