const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user login
router.post('/login', userController.login);

// Route for user signup
router.post('/signup', userController.signup);

module.exports = router;
