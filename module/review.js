const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    nota: { type: Number, required: true },
    email: { type: String, required: true, lowercase: true },
    texto: { type: String, required: true },
    nome: { type: String, required: true },
    created: { type: Date, default: Date.now },
    jogos_id: { type: Schema.Types.ObjectId, ref: 'Jogos', require: true }
});

module.exports = mongoose.model('Review', ReviewSchema);