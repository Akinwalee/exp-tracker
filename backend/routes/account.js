import express from 'express';
import { verifyBankAccount } from '../controllers/accountController.js';

const router = express.Router();

// Bank Account Verification Route
router.post('/verify', verifyBankAccount);

export default router;
