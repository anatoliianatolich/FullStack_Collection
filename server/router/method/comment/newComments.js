const Comments = require('../../../connectDB/Schema/comment')

module.exports = (req, res) => {
    const  comment = req.body;
    
    Comments.create( comment, (err, data) => {
        if(err) return res.status(404).send(err);
        res.status(200).send("comment create");
    } )
}