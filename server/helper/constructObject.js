module.exports = (user) => {
    let dataUser = {};
    for (let key in user){
        let arrAudit = ["name", "email", "password"]
        if (arrAudit.includes(key)) dataUser[key] = user[key];
    }
    return dataUser;
}
