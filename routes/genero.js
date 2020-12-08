const express = require('express');
const router = express.Router();
const Genero = require('../module/genero');

//GET
router.get('/', (req, res) => {
    if(req.body._id){
        Genero.findById(req.body._id, (err, data) => {
            if(err) return  res.sendStatus(400).send({ error: 'Genero informado nao encontrado' });
            return res.send(data);
        });
    } else {
        Genero.find({}, (err, data) => {
            if(err) return res.sendStatus(400).send({ error: 'Erro ao requisitar Genero' });
            return res.send(data);
        });
    }
});

//POST
router.post('/', (req, res) => {
    const nome = req.body;
    if(!nome) return res.sendStatus(400).send({ error: 'nome do Genero não informado' });

    //procura genero para verificar se ja existe
    Genero.findOne(nome, (err, data) => {
        if(err) return res.send({ error: 'Erro ao buscar Genero!' });
        if(data) return res.send({ error: 'Genero ja cadastrado!' });

        Genero.create(req.body, (err, data) => {
            if(err) return res.send( { error: 'Erro ao Cadastrar Genero' + err });

            return res.send(data);
        });
    });
});

module.exports = router;