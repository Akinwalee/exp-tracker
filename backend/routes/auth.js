import express from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { refreshJWT } from '../middleware/authMiddleware.js';
import { AuthController } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/refresh-token', refreshJWT); // Add this route for refreshing tokens

export default router;
