const base64 = require("base-64");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const req = {
    "email":"com@com.ua",
    "name":"com",
    "password": "test"
};

const ENV = "none"

// реєстрація
попередньо перевіряємо унікальність емейла

let hashpass = bcrypt.hashSync(req.password, bcrypt.genSaltSync(8), ENV);
console.log(hashpass);

let token = base64.encode(JSON.stringify(req));
req.token = token;

console.log(req);
// записуємо пароль в хеш базу

// генеруємо токен

token  = jsonwebtoken.sign(req, ENV, {algorithm: 'RS256'}, {expiresIn: '72h'})

// після чого відправляємо токен




