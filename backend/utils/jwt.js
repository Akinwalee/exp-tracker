import jwt from 'jsonwebtoken';

/**
 * Generate a JWT token.
 * @param {Object} payload - Data to include in the token (e.g., user ID).
 * @returns {string} - The generated JWT token.
 */
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};
