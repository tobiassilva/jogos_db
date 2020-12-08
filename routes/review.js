const express = require('express');
const router = express.Router();
const Jogos = require('../module/jogos');
const Review = require('../module/review');

router.get('/', (req, res) => {
    
    const jogos_id = req.body;

    if(!jogos_id) {
        Review.find({}, (err, data) => {
            if(err) return res.send({ error: 'Erro ao requisitar Review' });
            return res.send(data);
        });
    }else{
        Review.find({jogos_id: req.body.jogos_id}, (err, data) => {
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
        !req.body.jogos_id
    ) return res.send({ error: 'Dados obrigatórios Faltantes' });

          // procura Jogo referenciado
          Review.findById(req.body.jogos_id, async (err, doc) => {
            if(err) res.sendStatus(400).send({ error: 'Jogo informado não encontrado' });

                const newRev = new Review({ ...req.body });
                await newRev.save();

                /*await doc.jogos.push(newJogo);
                await doc.save();*/

                return res.send(newRev);
        });
});

module.exports = router;
