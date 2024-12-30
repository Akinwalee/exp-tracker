import { BudgetModel } from '../models/BudgetModel.js';
import { ExpenseModel } from '../models/ExpenseModel.js';
import { IncomeModel } from '../models/IncomeModel.js';

export const BudgetService = {
  // Create a new budget
  createBudget: async (userId, amount, duration) => {
    return await BudgetModel.create(userId, amount, duration);
  },

  // Get a summary of the current budget
  getBudgetSummary: async (userId) => {
    const budget = await BudgetModel.getCurrentBudget(userId);
    if (!budget) return { remaining: 0, totalExpenses: 0, totalIncome: 0 };

    const totalExpenses = await ExpenseModel.getTotalExpenses(userId, budget.created_at);
    const totalIncome = await IncomeModel.getTotalIncome(userId, budget.created_at);

    const remaining = budget.amount - totalExpenses;
    return { budget, remaining, totalExpenses, totalIncome };
  },

  // Update an existing budget
  updateBudget: async (budgetId, amount, duration) => {
    return await BudgetModel.update(budgetId, amount, duration);
  },

  // Get all budgets for the user
  getBudgets: async (userId) => {
    return await BudgetModel.getAll(userId);
  },
};
