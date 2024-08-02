require('dotenv').config({ path: '../.env' }); // Adjust the path if necessary
const app = require('./app');
const connectDB = require('./config/db');

console.log('MongoDB URI from .env:', process.env.MONGO_URI);

// Connect to the database
connectDB();

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
