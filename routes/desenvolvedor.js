const express = require('express');
const router = express.Router();
const Desenvolvedor = require('../module/desenvolvedor');

//GET
router.get('/', (req, res) => {
    if(req.body._id){
        Desenvolvedor.findById(req.body._id, (err, data) => {
            if(err) return  res.sendStatus(400).send({ error: 'Desenvolvedor informado nao encontrado' });
        });
    } else {
        Desenvolvedor.find({}, (err, data) => {
            if(err) return res.sendStatus(400).send({ error: 'Erro ao requisitar Desenvolvedor' });
            return res.send(data);
        });
    }
});

//POST
router.post('/', (req, res) => {
    const nome = req.body;
    if(!nome) return res.sendStatus(400).send({ error: 'nome do Desenvolvedor não informado' });

    //procura genero para verificar se ja existe
    Desenvolvedor.findOne(nome, (err, data) => {
        if(err) return res.send({ error: 'Erro ao buscar Desenvolvedor!' });
        if(data) return res.send({ error: 'Desenvolvedor ja cadastrado!' });

        Desenvolvedor.create(req.body, (err, data) => {
            if(err) return res.send( { error: 'Erro ao Cadastrar Desenvolvedor' + err });

            return res.send(data);
        });
    });
});

module.exports = router;