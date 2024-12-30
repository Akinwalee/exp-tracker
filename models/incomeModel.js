import db from '../utils/db.js';

export const IncomeModel = {
  // Add a new income entry
  create: async (userId, amount, source) => {
    const query = `
      INSERT INTO incomes (user_id, amount, source, created_at)
      VALUES (?, ?, ?, NOW())
    `;
    const [result] = await db.execute(query, [userId, amount, source]);
    return result.insertId;
  },

  // Fetch total income within a specific date range
  getTotalIncome: async (userId, startDate) => {
    const query = `
      SELECT SUM(amount) AS totalIncome
      FROM incomes
      WHERE user_id = ? AND created_at >= ?
    `;
    const [rows] = await db.execute(query, [userId, startDate]);
    return rows[0].totalIncome || 0;
  },
};


class Income {
  static async createIncome(userId, amount, source, description, date) {
    const query =
      'INSERT INTO incomes (user_id, amount, source, description, date) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.execute(query, [userId, amount, source, description, date]);
    return result;
  }

  static async getUserIncomes(userId) {
    const query = 'SELECT * FROM incomes WHERE user_id = ? ORDER BY date DESC';
    const [incomes] = await db.execute(query, [userId]);
    return incomes;
  }
}

export default Income;
