import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Import CRUD handlers for books
import { createbook } from './createbook.js';
import { getAllbooks } from './getAllbook.js';
import { updatebook } from './updatebook.js';
import { deletebook } from './deletebook.js';
import { getbooksByID } from './getbooksById.js';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express router
const router = express.Router();

// Define upload directory and ensure it exists
const uploadDir = path.join(__dirname, '../public/Images'); // Adjust the path as needed
if (!fs.existsSync(uploadDir)) {
    try {
        fs.mkdirSync(uploadDir, { recursive: true });
    } catch (err) {
        console.error('Error creating upload directory:', err);
        console.log(err);
    }
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Preserve the original filename
        cb(null, file.originalname);
    },
});

// Multer upload configuration
const upload = multer({ storage });

// Route to create a book (with file upload)
router.post('/upload', upload.single('pdfFile'), createbook);

// Route to get all books
router.get('/', getAllbooks);

// Route to get a specific book by ID
router.get('/:id', getbooksByID);

// Route to update a book
router.put('/:id', updatebook);

// Route to delete a book
router.delete('/:id', deletebook);

// Export the router for use in other files
export default router;
