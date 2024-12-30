import db from '../utils/db.js';

class User {
  static async createUser(name, email, password) {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [name, email, password]);
    return result;
  }

  static async findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [users] = await db.execute(query, [email]);
    return users[0];
  }

  static async findUserById(id) {
    const query = 'SELECT id, name, email, created_at FROM users WHERE id = ?';
    const [users] = await db.execute(query, [id]);
    return users[0];
  }
}

export default User;
