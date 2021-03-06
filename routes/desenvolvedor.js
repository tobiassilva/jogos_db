const express = require('express');
const router = express.Router();
const Desenvolvedor = require('../module/desenvolvedor');

//GET
router.get('/', (req, res) => {
    if(req.body._id){
        Desenvolvedor.findById(req.body._id, (err, data) => {
            if(err) return  res.send({ error: 'Desenvolvedor informado nao encontrado' });
            return res.send(data);
        });
    } else {
        Desenvolvedor.find({}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Desenvolvedor' });
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

//DELETE
router.delete('/', (req, res) => {
    //const { nome } = req.body;

    //if(!nome) return res.send({ error: 'Nome do Partido deve ser Adicionado' });

    Desenvolvedor.deleteMany({}, (err, data) => {
        if(err) return res.send({ error: 'Erro ao excluir Desenvolvedor' });
        return res.send('Desenvolvedor excluidos com Sucesso');
    });
});

module.exports = router;