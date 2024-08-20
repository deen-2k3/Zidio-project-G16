const express = require('express');
const router = express.Router();
const jobApplyController = require('../controllers/jobApplyController');

// Route to handle job application creation
router.post('/job', jobApplyController.createJobApplication);

module.exports = router;
