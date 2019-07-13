const mongoose = require("mongoose");
// string de conexao: mongodb://dominio:porta/nome_database
const MONGO_URL = "mongodb://localhost:27017/reprograma";

function connect () {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true},
    function (error) {
        if(error) {
            console.log('Deu erro: ', error)
        } else{
            console.log('Conectamos no mongodb!!')
        }
    }
    );
    // TODO: conectar no nosso mongo usando a MONGO_URL
}

module.exports = { connect}