import { Book } from "../schema/bookschema.js";

export const deletebook = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "Book Not Found" });
        }

        return res.status(200).send({ message: "Book deleted successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
};