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

//inserir as demais rotas (atualizar e editar)
//rota para atualizar
router.put('/:id', (req, res) => {
    //pegar os dados do formulario JSON
    const {nome, email} = req.body;
    const {id} = req.params;

    //atualizar os campos
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) => {
        if (err) return res.status(500).send(err);

        res.json({id, nome, email});
    });
});

//rota para a exclusão
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    //executar o comando SQL
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

//exportar para utilizar no server.js
module.exports = router;
