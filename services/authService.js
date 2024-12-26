import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/UserModel.js';

export const AuthService = {
  registerUser: async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = await import('../utils/db.js').then((module) => module.connectDB());
    await UserModel.createUser(db, email, hashedPassword);
    return { message: 'User registered successfully' };
  },

  loginUser: async (email, password) => {
    const db = await import('../utils/db.js').then((module) => module.connectDB());
    const user = await UserModel.getUserByEmail(db, email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  },
};
