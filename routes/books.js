const express = require('express');
const { getBooks, addBook, deleteBook } = require('../controllers/books.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', getBooks);
router.post('/new', addBook);
router.delete(`/del`, deleteBook)

module.exports = router;
