import express from 'express';
import { sendNotification, sendBulkNotifications } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/send', sendNotification); // Send notification to a single user
router.post('/send-bulk', sendBulkNotifications); // Send bulk notifications

export default router;
