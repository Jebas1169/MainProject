const Product = require('../models/ProductModel');
const mongoose = require('mongoose');

// POST a product (CREATE)
const createProduct = async (req, res) => {
    const { name, description, price, category, stock, imageUrl } = req.body;
    try {
        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        res.status(201).json(product);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// GET all products (READ)
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

// GET a specific product by ID (READ)
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE a product (UPDATE)
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE a product (DELETE)
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }
        const deletedProduct = await Product.findByIdAndRemove(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(deletedProduct);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
