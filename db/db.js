const mongoose = require('mongoose');

const DB_URI =  "mongodb://localhost:27017/marvel_api";

mongoose.connect(DB_URI)
    .then(() => console.log("Conectando ao mongoDB como o Dr. estrano no multiverso"))
    .catch(err => console.log("Erro ao conectar:",err));

module.exports = mongoose;