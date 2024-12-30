import Savings from '../models/savingsModel.js';

export const addSavings = async (req, res) => {
  const { amount, goal, description, date } = req.body;

  try {
    const savings = await Savings.createSavings(req.user.id, amount, goal, description, date);
    res.status(201).json({ success: true, message: 'Savings added successfully', savingsId: savings.insertId });
  } catch (error) {
    console.error('Error adding savings:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getSavings = async (req, res) => {
  try {
    const savings = await Savings.getUserSavings(req.user.id);
    res.status(200).json({ success: true, savings });
  } catch (error) {
    console.error('Error fetching savings:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
