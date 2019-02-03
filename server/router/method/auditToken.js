const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');



const auditToken = (req,res,next) => {
    // console.log(req.token);
    console.log(req.headers.authorization); 
//    if(!req.headers['x-auth']){
//        res.status(401);

//        return res.send("You need log in");
//    }
//    try {
//        var auth = jwt.decode(req.headers['x-auth'], config.secret)
//    } catch (e) {
//        return res.sendStatus(500);
//    }

//    User.findOne({userName: auth.username}), (err,user) => {
//        console.log(user);
//        if(err) return res.sendStatus(500);
//        res.json(user);
//    }
    res.status(200);
    next();
}

module.exports = auditToken;