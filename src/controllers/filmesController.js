const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    const query = 'select * from filmes';
    dbConnection.query(query, (err, result) => {
        if (err) {
            throw err;
        }

        response.json(result);
    });
});

router.get('/:id', (request, response) => {
    const id = request.params.id;
    const query = `select * from filmes where id = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            throw err;
        }

        response.json(results);
    });
});



/*
crie as requisições para trazer:
 - todos os usuários (/usuarios)
 - os usuários por username (/usuarios/:username)

crie as requisições para trazer:
 - todas as avaliações feitas com o nome do usuário que a fez
*/

module.exports = router;