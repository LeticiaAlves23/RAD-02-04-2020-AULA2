const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuárioSchema = new Schema({

    UsuárioName: {
        type: String,
        required: true
    },

    password: {
        typr: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
});