const PRODUCT = require('../models/product');

// Retorna todos os produtos
exports.getAll = (req, res, next) =>
    PRODUCT.find().then(product => res.send(product)).catch(next);

// Retorna os produtos de acordo com o parâmetro q
exports.find = (req, res, next) => {
    let valor = Number(req.query.q);
    let searches = [
        { produto: { $regex: req.query.q, $options: "i" } },
        { descricao: { $regex: req.query.q, $options: "i" } },
    ];
    if (!isNaN(valor)) searches.push({ valor })
    PRODUCT.find({ $or: searches }).then(product => res.send(product)).catch(next);
}

// Retorna os detalhes do produto
exports.details = (req, res) =>
    PRODUCT.findById({ _id: req.params.id }).then(product => res.send(product));

// Adiciona um novo produto
exports.create = (req, res, next) =>
    PRODUCT.create(req.body).then(product => res.send(product)).catch(next);

// Atualiza os dados de um produto
exports.update = (req, res, next) =>
    PRODUCT.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
        (product) => res.send(product == null ? { 'error': 'id not found' } : product)
    ).catch(next);

// Atualiza apenas alguns dados do produto
exports.patch = exports.update = (req, res, next) =>
    PRODUCT.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
        (product) => res.send(product == null ? { 'error': 'id not found' } : product)
    ).catch(next);

// Apaga o produto
exports.delete = (req, res, next) =>
    PRODUCT.findByIdAndRemove({ _id: req.params.id }).then(product => res.send(product)).catch(next);