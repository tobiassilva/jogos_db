const express = require('express');
const router = express.Router();
const fs = require('fs');
const Jogos = require('../module/jogos');
const Console = require('../module/console');
const Genero = require('../module/genero');
const Desenvolvedor = require('../module/desenvolvedor');

var formidable = require('formidable');

/*
router.get('/', (req, res) => {
    var response = [];
    const console_id = req.body;
    if(!console_id) {
        return res.send({ error: 'console_id nao informado' });
    }else{
        Jogos.find({console_id: req.body.console_id}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Jogos' });
            data.forEach((infos) => {
                response.push({
                    _id: infos._id,
                    nome: infos.nome,
                    resumo: infos.resumo,
                    desenvolvedor: infos.desenvolvedor,
                    genero: infos.genero,
                    descricao: infos.descricao,
                    imagem: 'data:image/jpeg;base64,'+infos.imagem.toString('base64'),
                    avaliacao: infos.avaliacao,
                    genero_id: infos.genero_id,
                    desenvolvedor_id: infos.desenvolvedor_id,
                    console_id: infos.console_id
                });
            });
            return res.json(response || '');
        });
    }

    
});*/

router.get('/', (req, res) => {
    const console = req.body;
    if(!console) {
        return res.send({ error: 'console nao informado' });
    }else{
        Jogos.find({console: req.body.console}, (err, data) => {
            if (err) return res.send({ error: 'Erro na consulta de usuários' });
            return res.send(data);
        });
    }
});

router.get('/topGames', (req, res) => {
    const console = req.body;
    if(!console) {
        return res.send({ error: 'console nao informado' });
    }else{
        Jogos.find({console: req.body.console}, (err, data) => {
            if (err) return res.send({ error: 'Erro na consulta de usuários' });
            return res.send(data);
        }).sort({avaliacao: 1}).limit(3);
    }
});

// POST
router.post('/', (req, res) => {
    if(req.body.avaliacao) return res.send({ error: 'Campo "Avaliacao" não deve ser informado' });

    if(
        !req.body.nome ||
        !req.body.desenvolvedor ||
        !req.body.genero ||
        !req.body.imagem ||
        !req.body.console
    ) return res.send({ error: 'Dados obrigatórios Faltantes' });

    console.log(req.body);
    Jogos.create(req.body, (err, data) => {
        if(err) return res.send({ error: 'Erro ao criar jogo!' });

        return res.send(data);
    });
});

/*router.post('/', (req, res) => {
    if(req.body.avaliacao) return res.send({ error: 'Campo "Avaliacao" não deve ser informado' });

    if(
        !req.body.nome ||
        !req.body.desenvolvedor ||
        !req.body.genero ||
        !req.body.imagem ||
        !req.body.console_id ||
        !req.body.genero_id ||
        !req.body.desenvolvedor_id
    ) return res.sendStatus(400).send({ error: 'Dados obrigatórios Faltantes' });

    var form = new formidable.IncomingForm();

    form.parse(req, function(erros, campos, arquivos) {
          var file = arquivos.imagem;
          console.log('Arquivo de imagem');
          console.log(file);

          // procura Console referenciado
            Console.findById(req.body.console_id, async (errConsole, docConsole) => {
                if(errConsole) res.sendStatus(400).send({ error: 'Console informado não encontrado' });

                // procura Genero referenciado
                Genero.findById(req.body.genero_id, async (errGen, docGen) => {
                    if(errGen) res.sendStatus(400).send({ error: 'Genero informado não encontrado' });
                    
                    // procura Desenvolvedor referenciado
                    Desenvolvedor.findById(req.body.desenvolvedor_id, async (errDes, docDes) => {
                        if(errDes) res.sendStatus(400).send({ error: 'Desenvolvedor informado não encontrado' });

                        fs.readFile(file.path, async (err, data) => {
                            if(err) res.send({ error: 'Erro imagem' + err });

                            const newJogo = new Jogos({ ...req.body, imagem: data });
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
        });
});*/

module.exports = router;
