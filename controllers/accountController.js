import { verifyAccount } from '../services/paystackService.js';

export const verifyBankAccount = async (req, res) => {
  const { accountNumber, bankCode } = req.body;

  try {
    const account = await verifyAccount(accountNumber, bankCode);
    res.status(200).json({ success: true, account });
  } catch (error) {
    console.error('Error verifying bank account:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
