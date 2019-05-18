const JWT = require("jsonwebtoken");
const { secret } = require("../../config/config");
const {DeletePassUser} = require("../../helper/constructObject");
const User = require("../../connectDB/Schema/user");

module.exports = (req, res, next) => {

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
    else if(req.headers.authorization){
        console.log("audit authorization");
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        JWT.verify(token, secret, (err, decode) => {
            if(err) return res.status(200).send("audit authorization", err);
            const {email, password} = decode;
            console.log(decode);
            User.findOne({email: email})
                .select("password")
                .exec((err, data) => {
                    const dataPass = data.password;
                    if(dataPass === password){
                        req.dataUser = decode;
                        console.log(1)
                        next();
                    }
                    else {res.status(200).send("err pass or email")}
                }
            )
        })
    }
    else{
        console.log('HOSTNAME', req.name, req.route);
        console.log('req WebSocket');
        res.status(200).send("err pass or email");
        // next();
    }
}
