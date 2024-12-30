import winston from 'winston';
import morgan from 'morgan';

// Create a logger instance using Winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

// Morgan middleware to log HTTP requests
const requestLogger = morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, requestLogger };
