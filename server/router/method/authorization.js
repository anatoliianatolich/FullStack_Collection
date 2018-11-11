const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../../connectDB/Schema/registration');



const authorization = (req,res,next) => {
   if(!req.headers['x-auth']){
       res.status(401);
       // здійснити переключення на форму з якої здійснити post запит на authorizasions
       return res.send("You need log in");
   }
   try {
       var auth = jwt.decode(req.headers['x-auth'], config.secret)
   } catch (e) {
       return res.sendStatus(500);
   }
   User.findOne({userName: auth.username}), (err,user) => {
       console.log(user);
       if(err) return res.sendStatus(500);
       else res.json(user);
   }
}

module.exports = authorization;