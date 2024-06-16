import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        Department: {
            type: String,
            required: true,
        },
        Author: {
            type: String,
            required: true,
        },
        Topic: {
            type: String,
            required: true,
        },
        pdfFilePath: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }
);

export const Book = mongoose.model('Book', bookSchema);
