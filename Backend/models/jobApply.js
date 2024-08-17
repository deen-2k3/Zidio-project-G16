const mongoose = require('mongoose');

const jobApplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  mobileNo: {
    type: String, // Using String to accommodate different phone formats
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  instituteName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  }
});

const JobApply = mongoose.model('JobApply', jobApplySchema);
module.exports = JobApply;
