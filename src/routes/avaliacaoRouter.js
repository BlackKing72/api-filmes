const avaliacaoController = require('../controllers/avaliacaoController');
const express = require('express');
const router = express.Router();

router.use('/avaliacoes', avaliacaoController);

module.exports = router;