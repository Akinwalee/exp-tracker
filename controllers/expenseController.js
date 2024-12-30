import db from '../utils/db.js';

class ExpenseController {
  static async getAllExpenses(req, res) {
    try {
      const [rows] = await db.execute('SELECT * FROM expenses WHERE user_id = ?', [req.user.id]);
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  }

  static async createExpense(req, res) {
    const { amount, category, description } = req.body;
    try {
      await db.execute(
        'INSERT INTO expenses (user_id, amount, category, description) VALUES (?, ?, ?, ?)',
        [req.user.id, amount, category, description]
      );
      res.status(201).json({ message: 'Expense added successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  }

  static async updateExpense(req, res) {
    const { amount, category, description } = req.body;
    try {
      await db.execute(
        'UPDATE expenses SET amount = ?, category = ?, description = ? WHERE id = ? AND user_id = ?',
        [amount, category, description, req.params.id, req.user.id]
      );
      res.status(200).json({ message: 'Expense updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  }

  static async deleteExpense(req, res) {
    try {
      await db.execute('DELETE FROM expenses WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  }
}

export default ExpenseController;
