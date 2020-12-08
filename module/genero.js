const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneroSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    jogos: [{ type: Schema.Types.ObjectId, ref: 'Jogos' }]
});

module.exports = mongoose.model('Genero', GeneroSchema);