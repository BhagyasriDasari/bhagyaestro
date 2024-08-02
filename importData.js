require('dotenv').config(); // Load environment variables
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./src/models/User'); // Adjust path as necessary

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import data function
const importData = async () => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
    await User.insertMany(data);
    console.log('Data imported successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

importData();
