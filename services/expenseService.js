import ExpenseModel from '../models/expenseModel.js';
import TransactionModel from '../models/transactionModel.js';
import SocketService from '../config/socket.js';
import FirebaseService from './firebaseService.js';

const ExpenseService = {
    addExpense: async (userId, amount, category, description, date) => {
        // Create a new expense in the database
        const expenseId = await ExpenseModel.createExpense(userId, amount, category, description, date);

        // Log the transaction
        await TransactionModel.createTransaction(userId, 'expense', amount, description, category, null, date);

        // Emit real-time update via Socket.IO
        SocketService.emitToUser(userId, 'expenseAdded', {
            expenseId,
            amount,
            category,
            description,
            date,
        });

        // Send push notification
        await FirebaseService.sendPushNotification(userId, 'New Expense Added', `You spent $${amount} on ${category}`);

        return expenseId;
    },

    getExpenses: async (userId) => {
        return await ExpenseModel.getExpensesByUser(userId);
    },
};

export default ExpenseService;