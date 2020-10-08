const express = require('express');
const router = express.Router();
// inport controolers
const { signup } = require('../controllers/auth');
router.get('/signup', signup);

module.exports = router;