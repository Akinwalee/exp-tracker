import express from 'express';
import { authenticateJWT } from '../middleware/authMiddleware.js';
import { BudgetController } from '../controllers/budgetController.js';

const router = express.Router();

router.post('/', authenticateJWT, BudgetController.createBudget);
router.get('/summary', authenticateJWT, BudgetController.getBudgetSummary);
router.put('/', authenticateJWT, BudgetController.updateBudget);
router.get('/', authenticateJWT, BudgetController.getBudgets);

export default router;
