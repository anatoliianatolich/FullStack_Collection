module.exports.CreateUser = (user) => {
    let dataUser = {};
    for (let key in user){
        let arrAudit = ["name", "email", "password","_id"]
        if (arrAudit.includes(key)) dataUser[key] = user[key];
    }

    return dataUser;
}
module.exports.DeletePassUser = (user) => {
    let dataUser = {};
    for (let key in user){
        let arrAudit = ["name", "email", "token"]
        if (arrAudit.includes(key)) dataUser[key] = user[key];
    }
    return dataUser;
}
