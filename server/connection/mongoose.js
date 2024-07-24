// connection/mongoose.js

import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.mongoDBURL || 'your-mongodb-connection-string-here';
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
