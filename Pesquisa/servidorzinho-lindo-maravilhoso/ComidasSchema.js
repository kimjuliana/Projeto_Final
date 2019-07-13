const mongoose = require ("mongoose");
//cada schema equivale a uma collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
nome: {type: String, required: true}, //required para dizer se e obrigatorio
descricao: { type: String},
valor: { type: Number},
imagem: {type: String} //
})
//schema eh a forma, model eh a forma de acessar
const comidasModel = mongoose.model("comidas", ComidasSchema); //eh a nossa colecao de comidas

module.exports = comidasModel;