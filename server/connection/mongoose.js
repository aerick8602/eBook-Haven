// connection/mongoose.js

import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.mongoDBURL;
export const BASE_URL = process.env.BASE_URL || 'http://localhost:5555'
