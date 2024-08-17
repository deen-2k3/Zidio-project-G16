const JobApply = require('../models/jobApply'); // Import the jobApply model

// Controller function to handle job application creation
exports.createJobApplication = (req, res) => {
    JobApply.create(req.body) // Create a new job application document with the data from req.body
        .then(jobapply => res.json(jobapply)) // If successful, respond with the created job application in JSON format
        .catch(err => res.status(400).json({ error: err.message })); // If there's an error, respond with a 400 status and the error message
};
