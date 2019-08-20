const chatMessage = require("../../../connectDB/Schema/chatMessage");

module.exports = (req, res) => {
    let message = req.body;
    // task.author = req.dataUser._id;

    chatMessage.create(message, (err, data) => {
        if(err) return res.status(200).send(err);
        console.log(data);
        return res.status(200).send("add message")
    })
}
