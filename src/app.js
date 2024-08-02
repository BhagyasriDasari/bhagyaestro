const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route to check if the API is running
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/uptime', require('./routes/uptime'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/report', require('./routes/report'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
