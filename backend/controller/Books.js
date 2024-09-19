const { Books } = require("../model/BooksSchema");

exports.createBook = async (req, res) => {
    const book = new Books(req.body);
    try {
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const findBooks = await Books.find({});
        res.status(200).json(findBooks);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

exports.updateBook = async (req, res) => {
    const {id} = req.params;
    try {
        const updateBooks = await Books.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateBooks);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

exports.deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteBook = await Books.findByIdAndDelete(id);
        res.status(200).json(deleteBook);
    } catch (error) {
        res.status(500).json({ err: error });
    }
};

