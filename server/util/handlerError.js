module.exports = (err, req, res) => {
    res.status(404);
    res.json({
        error: "audit correct enter Url",
        "advice": "audit correct enter Url"
    })
}



