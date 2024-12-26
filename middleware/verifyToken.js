import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { getExpenses, createExpense } from '../controllers/expenses.js';

const router = express.Router();

// Protected routes
router.get('/', verifyToken, getExpenses);
router.post('/', verifyToken, createExpense);

export default router;
