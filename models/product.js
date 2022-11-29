const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// PI Schema
const ProductSchema = new Schema({
    produto: {
        type: String,
        required: [true, '* Campo obrigatório!']
    },
    descricao: {
        type: String
    },
    valor: {
        type: Number,
        required: [true, '* Campo obrigatório!']
    },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
    }
});

const PRODUCT = mongoose.model('Produtos', ProductSchema);

module.exports = PRODUCT;