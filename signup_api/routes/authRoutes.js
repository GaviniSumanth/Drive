const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Create a User model

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user and save to the database
    const newUser = new User({ name, email, password });
    await newUser.save();
    
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});


// Sign-in route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    // User is authenticated, you can generate a JWT token here
    // and send it in the response
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
