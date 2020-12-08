const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsoleSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    jogos: [{ type: Schema.Types.ObjectId, ref: 'Jogos' }]
});

module.exports = mongoose.model('Console', ConsoleSchema);