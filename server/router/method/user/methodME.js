module.exports = (req,res,next) => {
    const {dataUser} = req;
    console.log(dataUser)
    res.status(200).send({"info":"Successful get info","dataUser":dataUser});
}