import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import path from 'path';
import { PORT, mongoDBURL, BASE_URL } from './connection/mongoose.js';
import router from './routes/routes.js'; // Adjust the path as needed


// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the specified directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Application connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Use the router
app.use('/books', router); // Adjust the base path as needed

// Default route
app.get('/', (req, res) => {
   return res.status(200).send("Hello fork, Welcome to eBook Haven 🤩🤩");
});

export default app;
