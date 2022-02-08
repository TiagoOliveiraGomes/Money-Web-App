const loadash = require("lodash")

const errorHandler = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    loadash.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

module.exports = errorHandler