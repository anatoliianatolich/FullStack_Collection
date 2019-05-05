const Task = require("../../../connectDB/Schema/tasks");
const User = require("../../../connectDB/Schema/user");


module.exports = (req, res) => {
    console.log(req.body);
    console.log(req.dataUser);
    res.status(200).send("+");

    Task.create(req.body, (err, data) => {
        if(err) return res.status(200).send(err);
        else {
            if(data) return res.status(204).send("no task")
            else{return res.status(200).send(data)}
        }
    })
}
