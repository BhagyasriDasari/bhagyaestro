const jwt = require('jsonwebtoken');

// Your secret key (same as in your .env file)
const secretKey = 'your_jwt_secret';

// Payload for the token
const payload = {
  userId: '12345',
  username: 'exampleUser'
};

// Options for the token
const options = {
  expiresIn: '30d' 
};

// Generate the token
const token = jwt.sign(payload, secretKey, options);

console.log('Generated Token:', token);
