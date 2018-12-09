
const Users = require("../../../connectDB/Schema/registration");

module.exports = {
    async auditUser(req,res,next){
        let {email} = req.body;
        Users.findOne({email:email})
            .select('email')
            .exec((err, docs) => {
            if(err) next();
        if(docs != null && docs.email === email){ 
            return res.status(200).send("Email is already")
        }
        else{
            next()
        }
        });
    }
}