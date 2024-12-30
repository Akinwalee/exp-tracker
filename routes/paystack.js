import express from 'express';
import { initiatePayment, verifyPayment } from '../controllers/paystackController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Initialize payment
router.post('/initialize', authenticateJWT, initiatePayment);

// Verify payment
router.post('/verify', authenticateJWT, verifyPayment);

export default router;
