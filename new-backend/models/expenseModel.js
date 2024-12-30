import db from '../utils/db.js';

class Expense {
  static async createExpense(userId, amount, category, description, date) {
    const query =
      'INSERT INTO expenses (user_id, amount, category, description, date) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.execute(query, [userId, amount, category, description, date]);
    return result;
  }

  static async getUserExpenses(userId) {
    const query = 'SELECT * FROM expenses WHERE user_id = ? ORDER BY date DESC';
    const [expenses] = await db.execute(query, [userId]);
    return expenses;
  }
}

export const ExpenseModel = {
  getAllExpenses: async (db, userId) => {
    const query = 'SELECT * FROM expenses WHERE user_id = ?';
    const [rows] = await db.execute(query, [userId]);
    return rows;
  },

  addExpense: async (db, userId, amount, category, description) => {
    const query = 'INSERT INTO expenses (user_id, amount, category, description) VALUES (?, ?, ?, ?)';
    return db.execute(query, [userId, amount, category, description]);
  },

  updateExpense: async (db, expenseId, userId, amount, category, description) => {
    const query =
      'UPDATE expenses SET amount = ?, category = ?, description = ? WHERE id = ? AND user_id = ?';
    return db.execute(query, [amount, category, description, expenseId, userId]);
  },

  deleteExpense: async (db, expenseId, userId) => {
    const query = 'DELETE FROM expenses WHERE id = ? AND user_id = ?';
    return db.execute(query, [expenseId, userId]);
  },
};


export default Expense;
