import express from 'express';
import User from './models/User.js'; // Make sure this path is correct for your User model

const router = express.Router();

// Endpoint for user login and fetching user profile data
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verify user credentials (this is a placeholder, use your actual authentication logic)
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({
        userId: user._id,
        email: user.email,
        profilePicture: user.profilePicture, // assuming this field exists
        products: user.products, // assuming this field exists
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
