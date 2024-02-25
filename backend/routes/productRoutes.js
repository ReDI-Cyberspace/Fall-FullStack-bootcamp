const express = require("express");
const router = express.Router();
const {getProduct} = require('../middleware/productMiddleware');
const { getAllProducts, createProduct, updateProduct,deleteProduct} = require('../controllers/productController');



router.get('/product-list', getAllProducts);
router.post('/admin', createProduct);
router.put('/admin/:id', getProduct, updateProduct);
router.delete('/admin/:id', getProduct, deleteProduct);

module.exports = router;