const productController = require('../controllers/productController');

const productRoutes = require('express').Router();

// POSTS
productRoutes.post('/addProduct', productController.addProduct);

// GETS
productRoutes.get('/allProducts', productController.getAllProducts);
productRoutes.get('/published', productController.getPublishedProduct);
productRoutes.get('/:id', productController.getSingleProduct);

// PUTS
productRoutes.put('/:id', productController.updateProduct);


// DELETES
productRoutes.delete('/:id', productController.deleteProduct);

module.exports = productRoutes;