module.exports = (err, req, res) => {
    res.status(404);
    res.json({
        error: err.message,
        stack: err.stack
    })
}



