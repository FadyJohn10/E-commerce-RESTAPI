const express = require('express');
const { getCategory, createCategory } = require('../services/categoryServices');
const router = express.Router();

router.route('/').get( getCategory).post(createCategory);

module.exports = router;