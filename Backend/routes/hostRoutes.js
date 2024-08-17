const express = require('express');
const router = express.Router();
const hostController = require('../controllers/hostController');

// Route to create a new host
router.post('/hosts', hostController.createHost);

// Route to get all hosts
router.get('/hosts', hostController.getHosts);

// Route to get a single host by ID
router.get('/hosts/:id', hostController.getHostById);

// Route to update a host by ID
router.put('/hosts/:id', hostController.updateHost);

// Route to delete a host by ID
router.delete('/hosts/:id', hostController.deleteHost);

module.exports = router;
