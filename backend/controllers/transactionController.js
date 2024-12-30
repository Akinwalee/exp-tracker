import TransactionService from '../services/transactionService.js';

const TransactionController = {
    createTransaction: async (req, res, next) => {
        try {
            const { type, amount, description, category, reference, date } = req.body;
            const userId = req.user.id; // Extracted from JWT

            const transactionId = await TransactionService.addTransaction(
                userId,
                type,
                amount,
                description,
                category,
                reference,
                date
            );

            res.status(201).json({ success: true, transactionId });
        } catch (error) {
            next(error);
        }
    },

    getTransactions: async (req, res, next) => {
        try {
            const userId = req.user.id;
            const transactions = await TransactionService.getTransactions(userId);

            res.status(200).json({ success: true, transactions });
        } catch (error) {
            next(error);
        }
    },

    getTransaction: async (req, res, next) => {
        try {
            const { id } = req.params;
            const userId = req.user.id;

            const transaction = await TransactionService.getTransactionById(id, userId);
            res.status(200).json({ success: true, transaction });
        } catch (error) {
            next(error);
        }
    },

    updateTransaction: async (req, res, next) => {
        try {
            const { id } = req.params;
            const userId = req.user.id;
            const updates = req.body;

            await TransactionService.updateTransaction(id, userId, updates);
            res.status(200).json({ success: true, message: 'Transaction updated successfully' });
        } catch (error) {
            next(error);
        }
    },

    deleteTransaction: async (req, res, next) => {
        try {
            const { id } = req.params;
            const userId = req.user.id;

            await TransactionService.deleteTransaction(id, userId);
            res.status(200).json({ success: true, message: 'Transaction deleted successfully' });
        } catch (error) {
            next(error);
        }
    },
};

export default TransactionController;