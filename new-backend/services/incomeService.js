import { IncomeModel } from '../models/incomeModel.js';

export const IncomeService = {
  addIncome: async (userId, amount, source) => {
    return await IncomeModel.create(userId, amount, source);
  },
};
