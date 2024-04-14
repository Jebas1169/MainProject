const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

// Route to handle seller registration
router.post('/register', sellerController.registerSeller);
// Route to handle seller login
router.post('/login', sellerController.loginSeller);
// Route to get all sellers
router.get('/', sellerController.getAllSellers);
// Route to approve seller
router.put('/approve/:id', sellerController.approveSeller);
// Route to reject seller
router.delete('/:id', sellerController.rejectSeller);


module.exports = router;