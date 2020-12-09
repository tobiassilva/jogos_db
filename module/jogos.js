const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JogosSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    resumo: String,
    desenvolvedor: { type: String, required: true },
    genero: { type: String, required: true },
    console: { type: String, required: true },
    descricao: String,
    //imagem: { type : Buffer, required: true },
    imagem: { type: String, required: true },
    avaliacao: { type: Number, default: 0, required: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
    //genero_id: { type: Schema.Types.ObjectId, ref: 'Genero', require: true },
    //desenvolvedor_id: { type: Schema.Types.ObjectId, ref: 'Desenvolvedor', require: true },
    //console_id: { type: Schema.Types.ObjectId, ref: 'Console', require: true }
});

module.exports = mongoose.model('Jogos', JogosSchema);