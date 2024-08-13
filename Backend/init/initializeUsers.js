const mongoose = require('mongoose');
const Login = require('../models/loginModel');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/JobPortal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Function to initialize sample user data
const initializeData = async () => {
    try {
        // Sample user data
        const users = [
            { username: 'johnDoe', email: 'john.doe@example.com', password: 'password123' },
            { username: 'janeDoe', email: 'jane.doe@example.com', password: 'securePass456' },
            { username: 'aliceSmith', email: 'alice.smith@example.com', password: 'alicePass789' },
            { username: 'bobJones', email: 'bob.jones@example.com', password: 'bobsSecret321' },
            { username: 'charlieBrown', email: 'charlie.brown@example.com', password: 'charlie12345' }
        ];

        // Insert sample data into the database
        await Login.insertMany(users);
        console.log('User data initialized successfully');

        // Close the database connection
        mongoose.connection.close();
    } catch (err) {
        console.error('Error initializing user data:', err.message);
        mongoose.connection.close();
    }
};

// Run the initialization function
initializeData();
