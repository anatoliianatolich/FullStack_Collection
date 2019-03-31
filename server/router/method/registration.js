const users = require("../../connectDB/Schema/user");
const jwt = require('jwt-simple');
const config = require('../../config/config')



const registration = (req, res) => {

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
    //     return (
    //         res.writeHead(201, {
    //             ["x-auth"]: token
    //         }).end({"userName": newUser.userName, "email": newUser.email, "role": "user"})
    // );
        return (
            res.status(200).send({ 
            "userName": newUser.userName, 
            "email": newUser.email, 
            "role": "user", 
            "token": token})
        );
    });
}

module.exports = registration
