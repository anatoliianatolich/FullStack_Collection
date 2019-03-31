module.exports = (req, res, next) => {
    let error = new Error('Not found page');
    next(error);
}
