const mongoose = require('mongoose');

// Define the Login schema
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Fixed typo here
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,  // Fixed typo here
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create the Login model
const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
