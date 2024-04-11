const Book = require('../models/book.model');

const getBooks = async (req, res) => {
    const books = await Book.getAll();
    console.log(books);
    res.status(200).json(books);
};

const addBook = async (req, res) => {
    const books = await Book.Add(req);
    res.status(201).json(books);
};

const deleteBook = async (req, res) => {
    const books = await Book.Delete(req);
    res.status(201).json(books);
}

module.exports = {
    getBooks,
    addBook,
    deleteBook,
};
