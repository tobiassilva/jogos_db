const express = require('express');
const router = express.Router();
const ConsoleJ = require('../module/console');

router.get('/', async (req, res) => {
    try{
        const consoleAux = await ConsoleJ.find().populate('Jogos');
        return res.send(consoleAux);
    } catch(err){
        return res.status(400).send({ error: err });
    }
});

// POST
router.post('/', (req, res) => {
    const nome = req.body;

    if(!nome) return res.sendStatus(400).send({ error: 'Campo "nome" é obrigatório' });

    //verifica se já existe console cadastrado com o mesmo nome
    ConsoleJ.findOne(nome, (err, data) => {
        if(err) return res.send({ error: 'Erro ao buscar consoles' });
        if(data) return res.send({ error: 'Console ja cadastrado!' }); //encontrou o email no banco igual o informado

        ConsoleJ.create(nome, (err, data) => {
            if(err) return res.send( { error: 'Erro ao Cadastrar Console' + err });

            return res.send(data);
        });

    });
});

module.exports = router;