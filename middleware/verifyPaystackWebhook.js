import crypto from 'crypto';

export const verifyPaystackWebhook = (req, res, next) => {
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash === req.headers['x-paystack-signature']) {
    return next();
  }

  res.status(400).json({ message: 'Invalid Paystack webhook signature' });
};
