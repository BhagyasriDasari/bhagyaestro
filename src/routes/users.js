const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/auth'); // Middleware for protected routes

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user details (secured route)
router.get('/:id', authenticateToken, getUser);

// Optional: List all users
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
