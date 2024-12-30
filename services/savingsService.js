import SavingsModel from '../models/savingsModel.js';
import FirebaseService from './firebaseService.js';
import SocketService from '../config/socket.js';

const SavingsService = {
    addSavingsGoal: async (userId, amount, goal, description, date) => {
        // Add savings goal to the database
        const savingsId = await SavingsModel.createSavings(userId, amount, goal, description, date);

        // Emit real-time update
        SocketService.emitToUser(userId, 'savingsAdded', {
            savingsId,
            amount,
            goal,
            description,
            date,
        });

        // Send push notification
        await FirebaseService.sendPushNotification(userId, 'New Savings Goal Added', `You've set a new goal: ${goal}`);

        return savingsId;
    },

    getSavingsGoals: async (userId) => {
        return await SavingsModel.getSavingsByUser(userId);
    },
};

export default SavingsService;