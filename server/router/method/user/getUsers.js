const User = require("../../../connectDB/Schema/registration")

const getUsers = (req,res) => {

    User.find( (err, docs) => {
        if(err) throw err;
        console.log(docs);
        res.send(docs);
    });

}

module.exports = getUsers;