import admin from 'firebase-admin';
import path from 'path';

// Firebase initialization
const serviceAccount = path.resolve('firebase/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

// Function to send a notification
export const sendPushNotification = async (token, title, body, data = {}) => {
  try {
    const message = {
      notification: { title, body },
      token,
      data, // Optional data payload
    };

    const response = await messaging.send(message);
    console.log('Notification sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error;
  }
};

// Function to send to multiple users
export const sendNotificationToMultiple = async (tokens, title, body, data = {}) => {
  try {
    const message = {
      notification: { title, body },
      tokens,
      data,
    };

    const response = await messaging.sendMulticast(message);
    console.log('Notifications sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending notifications:', error);
    throw error;
  }
};
