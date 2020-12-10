const express = require('express');
const router = express.Router();
const Jogos = require('../module/jogos');
const Review = require('../module/review');

router.get('/', (req, res) => {
    
    const nome = req.query['nome'];

    if(!nome) {
        Review.find({}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Review' });
            return res.send(data);
        });
    }else{
        Review.find({nome: nome}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Jogos' });
            
            return res.send(data);
        });
    }

});

// POST
router.post('/', (req, res) => {
    
    if(
        !req.body.nota ||
        !req.body.texto ||
        !req.body.nome ||
        !req.body.email
    ) return res.send({ error: 'Dados obrigatórios Faltantes' });

          // procura Jogo referenciado
          Jogos.find({nome: req.body.nome}, async (err, doc) => {
            if(err) res.sendStatus(400).send({ error: 'Jogo informado não encontrado' });

            const newRev = new Review({ ...req.body, jogos_id: doc._id });
            await newRev.save();

            await doc.reviews.push(newRev);
            await doc.save();

            console.log(doc);
            doc.avaliacao = (doc.avaliacao + req.body.nota)/doc.reviews.length;
            await doc.save();

            return res.send(newRev);
        });
});

module.exports = router;
