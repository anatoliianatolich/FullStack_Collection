const Comments = require('../../../connectDB/Schema/comment')

module.exports = (req, res) => {
    // const { _id } = req.dataUser;
    Comments.find({ author: "anatolii" }, null, {skip: 2}, (err, data) => {

        if (err) return res.status(404).send(err);

        res.status(200).send(data);
    })
}