const express = require('express');
const router = express.Router();
const jobApplyController = require('../controllers/jobApplyController');

// Route to handle job application creation
router.post('/jobapply', jobApplyController.createJobApplication);

module.exports = router;
