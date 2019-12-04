const JWT = require("jsonwebtoken");
const { secret } = require("../../config/config");
const {DeletePassUser} = require("../../helper/constructObject");
const User = require("../../connectDB/Schema/user");

module.exports = (req, res, next) => {

    if(req.dataUser){
        console.log("authentificated.js 9");
        let user = req.dataUser;
        const token  = JWT.sign(req.dataUser, secret, {expiresIn: '72h'});
        user.token = token;
        const filterUser = DeletePassUser(user);

        res.status(200).send({"info":"Successful", "dataUser":filterUser});
    }
    else if(req.headers.authorization){
        console.log("authentificated.js 18");
        // console.log(req.body);
        
        const token = req.headers.authorization.split(' ')[1].trim();
        console.log(token);
        JWT.verify(token, secret, (err, decode) => {
            console.log(err);
            if(err) return res.status(403).send("please log in again");
            console.log("after if");
            const {email, password} = decode;
 
            User.findOne({email: email})
                .select("password")
                .exec((err, data) => {
                    const dataPass = data.password;
                    if(dataPass === password){
                        req.dataUser = decode;
 
                        next();
                    }
                    else {res.status(403).send("error pass or email")}
                }
            )
        })
    }
    else{
        // console.log('HOSTNAME', req.name, req.route);
        console.log("look at file authentificated.js line 41")


        res.status(403).send("err pass or email");
        // next();
    }
}
