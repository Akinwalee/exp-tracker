import { sendPushNotification, sendNotificationToMultiple } from '../services/firebaseService.js';
import { io } from '../server.js'
import Notification from '../models/notificationModel.js';

// Send a single push notification
export const sendNotification = async (req, res) => {
  const { token, title, body, data } = req.body;

  try {
    const response = await sendPushNotification(token, title, body, data);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Send notifications to multiple users
export const sendBulkNotifications = async (req, res) => {
  const { tokens, title, body, data } = req.body;

  try {
    const response = await sendNotificationToMultiple(tokens, title, body, data);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const sendSocketNotification = (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ message: 'User ID and message are required' });
  }

  io.to(userId).emit('receiveNotification', { message });
  return res.status(200).json({ message: 'Notification sent' });
};