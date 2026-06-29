const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/all', productController.getAllProducts);
router.get('/featured', productController.getFeatured);
router.get('/search', productController.searchProducts);
router.get('/id/:id', productController.getProductById);
router.get('/:id', productController.getProductById);

module.exports = router;