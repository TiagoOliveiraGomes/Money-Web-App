const express = require('express')

const routes = (server) => {
    const router = express.Router()
    server.use('/api', router)
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycle')
}

module.exports = routes