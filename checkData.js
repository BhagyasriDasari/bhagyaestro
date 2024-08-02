// checkData.js

const mongoose = require('mongoose');
const User = require('./src/models/User'); // Adjust the path to your model file

const uri = 'mongodb://127.0.0.1:27017/estrotechdatabase';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected successfully');

  // Fetch and log all users
  const users = await User.find();
  console.log('Users:', users);

  // Close the connection
  mongoose.connection.close();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
