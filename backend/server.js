import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import http from 'http';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

// Middleware
import { applySecurityMiddleware } from './middleware/securityHeaders.js';
import { applyRequestLogging } from './middleware/requestLogger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { apiLimiter } from './middleware/rateLimiter.js';

// Utilities
import { swaggerDocs } from './utils/swagger.js';
import socketInit from './utils/socket.js';
import handleSockets from './socket/socketHandler.js'; 

// Import Routes
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expenses.js';
import incomeRoutes from './routes/income.js';
import savingsRoutes from './routes/savings.js';
import notificationRoutes from './routes/notifications.js';
import paystackRoutes from './routes/paystack.js';
import budgetRoutes from './routes/budgets.js';
import { fileURLToPath } from 'url';

// ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import Firebase Service Account
const serviceAccountPath = path.resolve('./firebase/serviceAccountKey.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Load environment variables
dotenv.config();

// Initialize Express App and HTTP Server
const app = express();
const httpServer = http.createServer(app);

// Initialize Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST'],
  },
});

// Handle WebSocket Events
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Example: Custom events
  socket.on('example_event', (data) => {
    console.log('Received example_event:', data);
    socket.emit('example_response', { message: 'Hello from server!' });
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Attach Socket.IO instance to the app for use in other modules
app.set('io', io);

// Apply Middleware
applySecurityMiddleware(app); // Custom security middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true })); // CORS
app.use(express.json()); // JSON parsing
app.use(morgan('dev')); // Logging
app.use(hpp()); // Prevent HTTP Parameter Pollution
app.use(xssClean()); // XSS Protection

// Strengthen Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  })
);

// Swagger API Documentation
const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes with Rate Limiting
app.use('/api/auth', apiLimiter, authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/savings', savingsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/paystack', paystackRoutes);
app.use('/api/budgets', budgetRoutes);

// Global Error Handler
app.use(errorHandler);

// Initialize Socket.IO
socketInit(io);
handleSockets(io);

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

// Start Server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle Uncaught Exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});

export { io };
export default app;