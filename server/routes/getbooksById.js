import { Book } from "../schema/bookschema.js";

export const getbooksByID = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
