const Chat = require("../../../connectDB/Schema/chatMessage");

module.exports = (req, res) => {
    let chat = req.body;
    chat.author = req.dataUser._id;

    Chat.find(task, (err, data) => {
        if(err) return res.status(200).send(err);
        console.log(data);
        return res.status(200).send(data)
    })
}
