const productController = require('../controllers/productController');

const router = require('express').Router();

// POSTS
router.post('/addProduct', productController.addProduct);

// GETS
router.get('/allProducts', productController.getAllProducts);
router.get('/published', productController.getPublishedProduct);
router.get('/:id', productController.getSingleProduct);

// PUTS
router.put('/:id', productController.updateProduct);


// DELETES
router.delete('/:id', productController.deleteProduct);

module.exports = router;