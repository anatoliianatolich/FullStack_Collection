module.exports = (req, res, next) => {
    console.log(1);
    let error = new Error('Not found page');
    next(error);
}
