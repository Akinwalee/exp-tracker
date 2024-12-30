import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const AuthController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.createUser(name, email, hashedPassword);

      res.status(201).json({ success: true, message: 'User registered successfully', userId: user.insertId });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findUserByEmail(email);
      if (!user) return res.status(401).json({ success: false, message: 'Invalid email or password' });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).json({ success: false, message: 'Invalid email or password' });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ success: true, token, user });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

export { AuthController };

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findUserById(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
