const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesenvolvedorSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    jogos: [{ type: Schema.Types.ObjectId, ref: 'Jogos' }]
});

module.exports = mongoose.model('Desenvolvedor', DesenvolvedorSchema);