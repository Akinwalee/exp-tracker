import db from '../utils/db.js';

class Notification {
  static async createNotification(userId, title, body) {
    const query = 'INSERT INTO notifications (user_id, title, body) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [userId, title, body]);
    return result;
  }

  static async getUserNotifications(userId) {
    const query = 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC';
    const [notifications] = await db.execute(query, [userId]);
    return notifications;
  }

  static async markAsRead(notificationId) {
    const query = 'UPDATE notifications SET is_read = TRUE WHERE id = ?';
    const [result] = await db.execute(query, [notificationId]);
    return result;
  }
}

export default Notification;
