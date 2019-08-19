const Task = require("../../../connectDB/Schema/tasks");

module.exports = (req, res) => {
    let task = req.body;
    task.author = req.dataUser._id;

    Task.create(task, (err, data) => {
        if(err) return res.status(200).send(err);
        console.log(data);
        return res.status(200).send(data)
    })
}
