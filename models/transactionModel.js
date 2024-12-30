import db from '../utils/database.js';

const TransactionModel = {
  createTransaction: async (userId, type, amount, description, category, reference, date) => {
    const query = `
      INSERT INTO transactions (user_id, type, amount, description, category, reference, date)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [userId, type, amount, description, category, reference, date]);
    return result.insertId;
  },

  getTransactionsByUser: async (userId) => {
    const query = `
      SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC
    `;
    const [results] = await db.execute(query, [userId]);
    return results;
  },

  getTransactionById: async (transactionId) => {
    const query = `
      SELECT * FROM transactions WHERE id = ?
    `;
    const [results] = await db.execute(query, [transactionId]);
    return results[0];
  },

  deleteTransaction: async (transactionId, userId) => {
    const query = `
      DELETE FROM transactions WHERE id = ? AND user_id = ?
    `;
    const [result] = await db.execute(query, [transactionId, userId]);
    return result.affectedRows > 0;
  },
};

export default TransactionModel;
