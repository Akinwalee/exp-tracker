import express from 'express';
import { addIncome, getIncomes } from '../controllers/incomeController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add Income Route
router.post('/', verifyToken, addIncome);

// Get Incomes Route
router.get('/', verifyToken, getIncomes);

export default router;
