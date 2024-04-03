const express = require('express');
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProductById
} = require('../controllers/ProductController');

// GET all products (READ)
router.get('/', getAllProducts);

// GET a specific product by ID (READ)
router.get('/:id', getProductById);

// POST a product (CREATE)
router.post('/', createProduct);

// DELETE a product (DELETE)
router.delete('/:id', deleteProduct);

// UPDATE a product (UPDATE)
router.patch('/:id', updateProduct);

module.exports = router;
