const Comments = require('../../../connectDB/Schema/comment')

module.exports = (req, res) => {
    console.log(123456677899900987654333455678988765456765434346474567);
    console.log("deleteComment");
    console.log(req.dataUser);
    console.log(req.body);
    Comments.deleteOne({ _id: 'Eddard Stark' }, function (err) {})
    Comments.find({ author: "anatolii" }, null, {skip: 2}, (err, data) => {

        if (err) return res.status(404).send(err);
       
        res.status(200).send(data);
    })
}