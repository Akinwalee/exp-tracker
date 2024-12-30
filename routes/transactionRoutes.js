import express from 'express';
import TransactionController from '../controllers/transactionController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new transaction
router.post('/', authenticateJWT, TransactionController.createTransaction);

// Get all transactions for a user
router.get('/', authenticateJWT, TransactionController.getTransactions);

// Get a specific transaction by ID
router.get('/:id', authenticateJWT, TransactionController.getTransaction);

// Update a transaction
router.put('/:id', authenticateJWT, TransactionController.updateTransaction);

// Delete a transaction
router.delete('/:id', authenticateJWT, TransactionController.deleteTransaction);

export default router;