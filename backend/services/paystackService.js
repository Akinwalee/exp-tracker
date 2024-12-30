import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PAYSTACK_BASE_URL = 'https://api.paystack.co';

const headers = {
  Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  'Content-Type': 'application/json',
};

export const initializeTransaction = async (email, amount, metadata = {}) => {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/transaction/initialize`,
      {
        email,
        amount: amount * 100, // Paystack accepts amounts in kobo
        metadata,
      },
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack Initialization Error:', error.response?.data || error.message);
    throw new Error('Failed to initialize transaction');
  }
};

export const verifyTransaction = async (reference) => {
  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack Verification Error:', error.response?.data || error.message);
    throw new Error('Failed to verify transaction');
  }
};
