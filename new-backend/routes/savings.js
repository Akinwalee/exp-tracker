import express from 'express';
import { addSavings, getSavings } from '../controllers/savingsController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add Savings Route
router.post('/', verifyToken, addSavings);

// Get Savings Route
router.get('/', verifyToken, getSavings);

export default router;
