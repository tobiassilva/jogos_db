
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    senha: { type: String, required: true, select: false }, //select false para nao receber o campo de volta na busca
    nome: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);