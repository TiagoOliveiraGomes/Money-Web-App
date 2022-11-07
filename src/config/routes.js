const { Router } = require('express')
const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(protectedApi, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}


// const router = express.Router()
// server.use('/api', router)