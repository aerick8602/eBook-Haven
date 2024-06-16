import { Book } from "../schema/bookschema.js";

export const updatebook = async (req, res) => {
    try {
        if (
            !req.body.Author ||
            !req.body.Department ||
            !req.body.Topic
        ) {
            return res.status(400).send({
                message: "Send all required fields"
            });
        }

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "Book Not Found" });
            console.log("Book Not Found");
        }

        return res.status(200).send({ message: "Book updated successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
};
