const express = require("express");
const app = express();
const rp = require("request-promise");

const bodyParser = require("body-parser");

const port = 4004;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app
    .get('/', (req, res)=> {
        res.status(200).send("<p>Hello</p>");
    })
    .get("/current", (req, res)=> {
    const arr = ["","26.06.2019","25.06.2019","24.06.2019","23.06.2019","22.06.2019","21.06.2019","20.06.2019",]
    const arrCurrent = [];
    arr.forEach((el, i) => {
        // console.log(i);
        let url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${el}`;
        console.log(url);
        rp(url)
            .then( (body) => {
            arrCurrent.push({[el]: body});
            console.log('line -36', body);
                console.log(arrCurrent.length);
                if(arrCurrent.length == 6) res.send(arrCurrent);
            }).catch((err)=>{
                console.log(err.responce);
                console.log("line39");
            })
        // res.send(arrCurrent);
    });
})

app.listen(port, () => {
    console.log(`Server running ${port}/`);
});