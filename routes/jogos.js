const express = require('express');
const router = express.Router();
const Jogos = require('../module/jogos');
const Console = require('../module/console');
const Genero = require('../module/genero');
const Desenvolvedor = require('../module/desenvolvedor');

router.get('/', (req, res) => {
    const console_id = req.body;
    if(!console_id) {
        return res.send({ error: 'console_id nao informado' });
    }else{
        Jogos.find({console_id: req.body.console_id}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Jogos' });
            return res.send(data);
        });
    }

    
});

// POST
router.post('/', (req, res) => {
    if(req.body.avaliacao) return res.sendStatus(400).send({ error: 'Campo "Avaliacao" não deve ser informado' });

    if(
        !req.body.nome ||
        !req.body.desenvolvedor ||
        !req.body.genero ||
        !req.body.console_id ||
        !req.body.genero_id ||
        !req.body.desenvolvedor_id
    ) return res.sendStatus(400).send({ error: 'Dados obrigatórios Faltantes' });

    // procura Console referenciado
    Console.findById(req.body.console_id, async (errConsole, docConsole) => {
        if(errConsole) res.sendStatus(400).send({ error: 'Console informado não encontrado' });

        // procura Genero referenciado
        Genero.findById(req.body.genero_id, async (errGen, docGen) => {
            if(errGen) res.sendStatus(400).send({ error: 'Genero informado não encontrado' });
            
            // procura Desenvolvedor referenciado
            Desenvolvedor.findById(req.body.desenvolvedor_id, async (errDes, docDes) => {
                if(errDes) res.sendStatus(400).send({ error: 'Desenvolvedor informado não encontrado' });
            
                const newJogo = new Jogos({ ...req.body });
                await newJogo.save();

                await docConsole.jogos.push(newJogo);
                await docConsole.save();

                await docGen.jogos.push(newJogo);
                await docGen.save();

                await docDes.jogos.push(newJogo);
                await docDes.save();

                return res.sendStatus(200).send(newJogo);
            });
            

        });
    });

});

module.exports = router;
