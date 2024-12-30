import FirebaseService from './firebaseService.js';
import SocketService from '../config/socket.js';

const NotificationService = {
  sendNotification: async (userId, title, body) => {
    // Send push notification using Firebase
    await FirebaseService.sendPushNotification(userId, title, body);

    // Emit real-time notification via Socket.IO
    SocketService.emitToUser(userId, 'notification', { title, body });
  },
};

export default NotificationService;
