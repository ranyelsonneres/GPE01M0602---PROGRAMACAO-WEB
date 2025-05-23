const express = require('express');

const router = express.Router();

const db = require('../db');

//rotas
//listar todos os usuários, quando a página for carregada
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

//criar um usuário
router.post('/', (req, res) => {
    const {nome, email} = req.body;

    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId, nome, email});
    });

});

module.exports = router;
