const express = require('express');
const router = express.Router();
const Login = require('../models/loginModel.js'); // Adjust the path if necessary

// Route to create a new login
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const login = new Login({ username, email, password });

    try {
        const savedLogin = await login.save();
        res.status(201).send(savedLogin);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
