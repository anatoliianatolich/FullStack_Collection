const Task = require("../../../connectDB/Schema/tasks");


module.exports = (req, res) => {
    const {_id} = req.dataUser;
    Task.find({author: _id}, (err, data) => {
        if(err) return res.status(200).send(err);
        res.status(200).send(data);
    })
}
