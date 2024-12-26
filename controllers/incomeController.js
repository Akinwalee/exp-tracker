import Income from '../models/incomeModel.js';
import { IncomeService } from '../services/incomeService.js';

export const IncomeController = {
  addIncome: async (req, res) => {
    try {
      const { amount, source } = req.body;
      const userId = req.user.id;

      if (!amount || !source) {
        return res.status(400).json({ message: 'Amount and source are required' });
      }

      const incomeId = await IncomeService.addIncome(userId, amount, source);
      res.status(201).json({ incomeId, message: 'Income added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};


export const addIncome = async (req, res) => {
  const { amount, source, description, date } = req.body;

  try {
    const income = await Income.createIncome(req.user.id, amount, source, description, date);
    res.status(201).json({ success: true, message: 'Income added successfully', incomeId: income.insertId });
  } catch (error) {
    console.error('Error adding income:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.getUserIncomes(req.user.id);
    res.status(200).json({ success: true, incomes });
  } catch (error) {
    console.error('Error fetching incomes:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
