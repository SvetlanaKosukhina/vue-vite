const express = require('express');

const {
  getAllOptions,
  addOptions,
  getOption,
} = require('../controllers/product/index');

const router = express.Router();

router.get('/', getAllOptions);
router.post('/addOptions', addOptions);
router.get('/:id', getOption);

module.exports = router;
