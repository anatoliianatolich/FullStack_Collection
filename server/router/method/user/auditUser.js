const users = require("../../../connectDB/Schema/registration");

module.exports = {
    async auditUser(req,res,next){
        const {email} = req.body;
        let user = await users.find({ email: email });
        console.log(user); 
        req.findUsr = true;
        next();
    }
}