import rateLimit from 'express-rate-limit';

export const strictAuthLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: 'Too many login attempts. Please try again after 10 minutes.',
});

// Rate limit for general API usage
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests
  message: 'Too many requests. Please try again later.',
});