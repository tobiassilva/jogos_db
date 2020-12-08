const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

///CONNECT DB CLOUD.MONGODB

const url = "mongodb+srv://usuario_admin:com222_123@clusterjogos.jlabi.mongodb.net/test?retryWrites=true&w=majority";
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com banco: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco');
});

//BODY PARSER
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

const indexRoute = require('./routes/index');
const consoleRoute = require('./routes/console');
const jogosRoute = require('./routes/jogos');
const generoRoute = require('./routes/genero');
const desenvolvedorRoute = require('./routes/desenvolvedor');

app.use('/', indexRoute);
app.use('/console', consoleRoute);
app.use('/jogos', jogosRoute);
app.use('/genero', generoRoute);
app.use('/desenvolvedor', desenvolvedorRoute);

app.listen(3000);

module.exports.app;



