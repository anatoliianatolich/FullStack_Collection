const Comments = require('../../../connectDB/Schema/comment')

module.exports = (req, res) => {
    const  comment = req.body;

    console.log("newcomment", comment);
    
    Comments.create( comment, (err, data) => {
        if(err) return res.status(404).send(err);
        console.log("newComment.js");
        res.status(200).send("comment create");
    } )
}