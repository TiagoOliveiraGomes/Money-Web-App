const port = 3003

const bodyParser = require("body-parser")
const express = require('express')
const server = express()
const allowCors = require("./cors")
const queryParser = require("express-query-int")
const cors = require('cors')

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () => {
    console.log(`server is running in port ${port}.`)
})

module.exports = server