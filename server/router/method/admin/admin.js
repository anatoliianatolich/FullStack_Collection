

const users = require("../../../connectDB/Schema/registration");
const bcrypt = require("bcrypt");

const fs = require("fs");

module.exports.adminPage = (req,res) =>{
    const adminPage = fs.readFileSync("./layout/tasktrecker/public/index.html", (err, data)=> {
        if (err) return res.status(404).end("Not found Page");
        res.status(200).send(data)   
    })
    res.end(adminPage);
}

module.exports.allUsers = (req, res, next) => {
    users.find({}, (err, docs)=>{
        if(err) return res.status(404).send("No connect DB")
        res.status(200).send(docs);
    })
}

module.exports.User = (req, res) => {
    const {user} = req.params;
    users.find({ userName: user}).exec((err, docs)=> {
        if (err) return res.status(404).send("No connect DB")
        res.status("200").send(docs);
    })
}

module.exports.updatePass = async (req,res) => {
    
    const {email} = req.params;
    let {pass, newPass} =req.body;
    console.log(pass, email, newPass);
    let newPassHash = bcrypt.hashSync(newPass, 8);

    const testSecret = await users.findOne({email: email}).select("password");
    
    if(bcrypt.compareSync(pass, testSecret.password) == true){
        users.findOneAndUpdate({ _id: testSecret._id}, { password: newPassHash}, (err, docs)=> {
        console.log(true);
        if(err) return res.status(404).send(err);
        res.status(200).send("You pass update")
    })
    } else {
        res.status(200).send("the password you entered is incorrect");
    }
}

module.exports.updateUser = (req,res) => {
    let { email, userName } = req.body;
    users.findOneAndUpdate({email: email}, {userName: userName}, (err, docs)=> {
        if (err) return res.status(404).send(err);
        res.status(200).send(`userName updated ${userName}`);
    })  
}

module.exports.deleteUser = (req,res) => {
    let { email} = req.body;
    users.findOneAndDelete({ email: email }, (err, docs) => {
        if (err) return res.status(404).send(err);
        res.status(200).send(`account user ${docs.userName} deleted`);
    }) 
}