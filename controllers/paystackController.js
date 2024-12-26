import { initializeTransaction, verifyTransaction } from '../services/paystackService.js';
import db from '../utils/db.js';

export const initiatePayment = async (req, res) => {
  const { email, amount, metadata } = req.body;

  try {
    const transaction = await initializeTransaction(email, amount, metadata);
    res.status(200).json({
      message: 'Transaction initialized successfully',
      data: transaction.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  const { reference } = req.body;

  try {
    const verification = await verifyTransaction(reference);

    if (verification.data.status === 'success') {
      // Update user's savings, balance, or other financial records
      const { email, metadata, amount } = verification.data;

      // Example: Add income to user's account
      const [user] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
      if (user.length) {
        await db.query(
          'INSERT INTO incomes (user_id, amount, source) VALUES (?, ?, ?)',
          [user[0].id, amount / 100, metadata.source || 'Paystack']
        );
      }

      return res.status(200).json({
        message: 'Payment verified successfully',
        data: verification.data,
      });
    }

    res.status(400).json({ message: 'Payment verification failed', data: verification.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
