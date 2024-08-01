const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = 'select a.*, u.username from avaliacoes a left join usuarios u on a.usuario_id = u.id';
    dbConnection.query(query, (err, results) => {
        if (err) { 
            throw err;
        }

        res.json(results);
    })
});

module.exports = router;