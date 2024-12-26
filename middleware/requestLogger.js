import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a write stream for logs
const logStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), {
  flags: 'a', // Append mode
});

// Apply Morgan logging middleware
const applyRequestLogging = (app) => {
  app.use(morgan('combined', { stream: logStream }));
};

export { applyRequestLogging };
