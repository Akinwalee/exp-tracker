import db from '../utils/db.js';

class Savings {
  static async createSavings(userId, amount, goal, description, date) {
    const query =
      'INSERT INTO savings (user_id, amount, goal, description, date) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.execute(query, [userId, amount, goal, description, date]);
    return result;
  }

  static async getUserSavings(userId) {
    const query = 'SELECT * FROM savings WHERE user_id = ? ORDER BY date DESC';
    const [savings] = await db.execute(query, [userId]);
    return savings;
  }
}

export default Savings;
