const router = require('express').Router();
// Import product controller
const productController = require('../controllers/product');

router.get('/', productController.getProduct);

router.post('/', productController.addProduct);

module.exports = router;
