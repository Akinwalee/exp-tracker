import helmet from 'helmet';

// Enhanced Helmet configuration
const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    },
  },
  referrerPolicy: { policy: 'strict-origin' },
  crossOriginEmbedderPolicy: true,
  crossOriginResourcePolicy: { policy: 'same-origin' },
  dnsPrefetchControl: { allow: false },
  expectCt: { enforce: true, maxAge: 86400 },
});

/**
 * Function to apply security middleware to the app
 * @param {Object} app - Express application instance
 */
const applySecurityMiddleware = (app) => {
  app.use(securityHeaders);

  // Add other security-related middleware if needed
  app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'ExpenseTracker'); // Hides default framework signature
    next();
  });

  console.log('Security middleware applied successfully.');
};

export { applySecurityMiddleware };
