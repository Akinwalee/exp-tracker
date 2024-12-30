import { BudgetService } from '../services/budgetService.js';
import { io } from '../server.js';

export const BudgetController = {
    // Create a new budget
    createBudget: async (req, res) => {
        try {
            const { amount, duration } = req.body;
            const userId = req.user.id;

            if (!amount || !duration) {
                return res.status(400).json({ message: 'Amount and duration are required' });
            }

            const budgetId = await BudgetService.createBudget(userId, amount, duration);
            io.to(userId).emit('budgetUpdated', { message: 'New budget created' });

            res.status(201).json({ budgetId, message: 'Budget created successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get budget summary
    getBudgetSummary: async (req, res) => {
        try {
            const userId = req.user.id;
            const summary = await BudgetService.getBudgetSummary(userId);

            res.status(200).json(summary);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update budget
    updateBudget: async (req, res) => {
        try {
            const { budgetId, amount, duration } = req.body;

            if (!budgetId || !amount || !duration) {
                return res.status(400).json({ message: 'Budget ID, amount, and duration are required' });
            }

            await BudgetService.updateBudget(budgetId, amount, duration);
            res.status(200).json({ message: 'Budget updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get all budgets
    getBudgets: async (req, res) => {
        try {
            const userId = req.user.id;
            const budgets = await BudgetService.getBudgets(userId);

            res.status(200).json(budgets);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};