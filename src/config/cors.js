module.exports = (req, res, next) => {
    res.header("Access-Allow-Control-Origin", "*")
    res.header("Access-Allow-Control-Methods", "GET, POST, PUT, OPTIONS, PATCH, DELETE")
    res.header("Access-Allow-Control-Headers", "Origin, X-Request-With, Content-Type, Accept, Authorization")
    next()
}