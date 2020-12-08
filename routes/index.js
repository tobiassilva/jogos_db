const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'bem vindo! acesso bem sucedido'});
});

module.exports = router;