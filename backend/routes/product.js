const express = require('express');

const {
  getAllProducts,
  addProduct,
  getProduct,
} = require('../controllers/product/index');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/addProduct', addProduct);
router.get('/:id', getProduct);

module.exports = router;
