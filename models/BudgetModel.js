import db from '../utils/db.js';

export const BudgetModel = {
  // Create a new budget for the user
  create: async (userId, amount, duration) => {
    const query = `
      INSERT INTO budgets (user_id, amount, duration, created_at)
      VALUES (?, ?, ?, NOW())
    `;
    const [result] = await db.execute(query, [userId, amount, duration]);
    return result.insertId;
  },

  // Fetch the current budget for a user
  getCurrentBudget: async (userId) => {
    const query = `
      SELECT id, amount, duration, created_at
      FROM budgets
      WHERE user_id = ? AND NOW() < DATE_ADD(created_at, INTERVAL duration DAY)
      ORDER BY created_at DESC
      LIMIT 1
    `;
    const [rows] = await db.execute(query, [userId]);
    return rows[0];
  },

  // Update the user's budget
  update: async (budgetId, amount, duration) => {
    const query = `
      UPDATE budgets
      SET amount = ?, duration = ?, updated_at = NOW()
      WHERE id = ?
    `;
    await db.execute(query, [amount, duration, budgetId]);
  },

  // Fetch all budgets for the user
  getAll: async (userId) => {
    const query = `
      SELECT id, amount, duration, created_at
      FROM budgets
      WHERE user_id = ?
      ORDER BY created_at DESC
    `;
    const [rows] = await db.execute(query, [userId]);
    return rows;
  },
};
