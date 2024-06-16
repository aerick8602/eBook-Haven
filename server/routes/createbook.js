import { Book } from "../schema/bookschema.js";

export const createbook = async (req, res) => {
    const { Department, Author, Topic } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).send('No file uploaded');
    }

    try {
        const pdfMetadata = new Book({
            Department,
            Author,
            Topic,
            pdfFilePath: file.path,
            timestamp: new Date()
        });

        const result = await pdfMetadata.save();
        res.status(200).send(`File uploaded and data saved with ID: ${result._id}`);
    } catch (error) {
        console.error('Error saving to MongoDB', error);
        res.status(500).send('Internal Server Error');
    }
};