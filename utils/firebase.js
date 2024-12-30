import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firebaseAdmin = admin;
export const sendPushNotification = async (deviceToken, title, body, data = {}) => {
  try {
    const message = {
      token: deviceToken,
      notification: {
        title,
        body,
      },
      data,
    };

    const response = await admin.messaging().send(message);
    console.log('Push notification sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending push notification:', error);
    throw new Error('Failed to send push notification');
  }
};
