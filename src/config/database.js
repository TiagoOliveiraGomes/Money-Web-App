const mongoose = require("mongoose")
require('dotenv').config()

const PASSWORD = process.env.PASSWORD
mongoose.Promise = global.Promise

// module.exports = mongoose.connect('mongodb://localhost/mymoney', {useMongoClient:true})
module.exports = mongoose.connect(`mongodb+srv://MyMoneyFrontendMaster:${PASSWORD}@MyMoneyApp.pv8brb9.mongodb.net/MyMoneyApp?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
