const fs = require("fs");

const mainPage = (req,res) => {
    console.log(req.headers);
    fs.readFile("./layout/tasktrecker/public/index.html", (err, data)=> {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
}

module.exports = mainPage;