const JWT = require("jsonwebtoken");
const { secret } = require("../../config/config");
const {DeletePassUser} = require("../../helper/constructObject");
const User = require("../../connectDB/Schema/user");

module.exports = (req, res) => {

    console.log("module authenticated");
    console.log("user",  req.dataUser);
    if(req.dataUser){
        console.log(secret);
        console.log(typeof req.dataUser);
        let user = req.dataUser;
        const token  = JWT.sign(req.dataUser, secret, {expiresIn: '72h'});
        user.token = token;
        const filterUser = DeletePassUser(user);
        console.log(8);
        res.status(200).send({"info":"Successful", "dataUser":filterUser});
    }
    else{
        console.log(req.headers.Authorization);
        const token = req.headers.Authorization.split(' ')[1];
        JWT.verify(token, secret, (err, decode) => {
            if(err) return res.status(200).send("audit authorization", err);
            const {email, password} = decode;
            User.findOne({email: email}, (err, data) => {
                const dataPass = data.password;
                if(dataPass === password){}
                    }
            )

            res.status(200).send("audit authorization");
        })

    }
}