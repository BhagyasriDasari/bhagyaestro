const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        // Options removed as they are deprecated
      });
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  };
  

module.exports = connectDB;
