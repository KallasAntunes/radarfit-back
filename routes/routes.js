const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Retorna todos os produtos
router.get('/produtos', productsController.getAll);

// Retorna os produtos de acordo com os parâmetros
router.get('/produtos/find', productsController.find);

// Retorna os detalhes do produto
router.get('/produtos/:id', productsController.details);

// Adiciona um novo produto
router.post('/produtos', productsController.create);

// Atualiza os dados de um produto
router.put('/produtos/:id', productsController.update);

// Atualiza apenas alguns dados do produto
router.patch('/produtos/:id', productsController.patch);

// Apaga o produto
router.delete('/produtos/:id', productsController.delete);

module.exports = router;