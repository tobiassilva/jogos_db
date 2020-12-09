const express = require('express');
const router = express.Router();
const Users = require('../module/user');

//retornar todos os usuarios
router.get('/', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) return res.send({ error: 'Erro na consulta de usuários' });
        return res.send(data);
    });
});

// Criar os usuarios
router.post('/create', (req, res) => {
    //const obj = req.body;
    const { email, senha, nome } = req.body; //se tiver email e senha ja vai direto para as variaveis

    //if(!obj.email || !obj.senha) return res.send({ error: 'Dados Insuficientes' });
    if(!email || !senha || !nome) return res.send({ error: 'Dados Insuficientes' });

    Users.findOne({ email }, (err, data) => { //findOne para procurar o email (no caso)
        if(err) return res.send({ error: 'Erro ao buscar usuários!' });
        if(data) return res.send({ error: 'Email ja cadastrado!' }); //encontrou o email no banco igual o informado

        Users.create(req.body, (err, data) => {
            if(err) return res.send({ error: 'Erro ao criar usuário!' });

            data.senha = undefined;
            return res.send(data);
        }) 
    });
});

//Login
router.post('/login', (req, res) => {
    //const obj = req.body;
    const { email, senha } = req.body;

    if(!email || !senha) return res.send({ error: 'Dados Insuficientes' });

    Users.findOne({ email }, (err, data) => { //findOne para procurar o email
        if(err) return res.send({ error: 'Erro ao buscar usuário!' });
        if(!data) return res.send({ error: 'Usuário não cadastrado!' }); //encontrou o email no banco igual o informado

        console.log(data._id);
        return res.send(data);

        /*Users.create(req.body, (err, data) => { // req.body = { email: email, password: password }
            if(err) return res.send({ error: 'Erro ao criar usuário!' });

            data.password = undefined;
            return res.send(data);
        })*/
    });
});

module.exports = router;

