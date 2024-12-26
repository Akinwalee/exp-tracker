import express from 'express'; // Import express
import ExpenseController from '../controllers/expenseController.js'; // Import your expense controller
import { authenticateJWT } from '../middleware/authMiddleware.js'; // Import JWT middleware

const router = express.Router(); // Create a router instance

// Define routes
router.get('/', authenticateJWT, ExpenseController.getAllExpenses); // Fetch all expenses
router.post('/', authenticateJWT, ExpenseController.createExpense); // Create an expense
router.put('/:id', authenticateJWT, ExpenseController.updateExpense); // Update an expense by ID
router.delete('/:id', authenticateJWT, ExpenseController.deleteExpense); // Delete an expense by ID

export default router; // Export the router
