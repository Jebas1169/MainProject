const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

// Route to handle seller registration
router.post('/register', sellerController.registerSeller);

module.exports = router;
