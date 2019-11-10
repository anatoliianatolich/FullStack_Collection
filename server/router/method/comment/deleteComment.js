const Comments = require('../../../connectDB/Schema/comment')

module.exports = (req, res) => {
    const _id = req.body;
    const {id} = req.params 

    // console.log(req.dataUser);
    // console.log(req.dataUser._id);
    // console.log("body", req.body);
    console.log(_id);

 
    Comments.deleteOne({ _id: id}, function (err, data) {
        if (err) return res.status(404).send(err);
        res.status(200).send(data);
    })
 
}