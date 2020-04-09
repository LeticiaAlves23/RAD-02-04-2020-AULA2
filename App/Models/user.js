var mongoose = require('mongoose')

var usuarioSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.model('Usuário', usuarioSchema)