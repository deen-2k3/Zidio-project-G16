const express = require('express');
const mongoose = require('mongoose');
const loginRoute = require('./routes/loginRoute'); // Import your login route

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/JobPortal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/register',loginRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
