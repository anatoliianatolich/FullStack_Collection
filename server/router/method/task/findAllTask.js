const Task = require("../../../connectDB/Schema/tasks");


module.exports = (req, res, email) => {
    Task.findOne({email:email}, (err, data) => {
        if(err) return res.status(200).send(err);
        else {
            if(data) return res.status(204).send("no task")
            else{return res.status(200).send(data)}
        }
    })
}
