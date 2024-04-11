const async = require('hbs/lib/async');
const db = require('./db');

// constructor
// eslint-disable-next-line func-names
const Book = function (book) {
    this.book_id = book.book_id;
    this.book_name = book.book_name;
    this.book_author = book.book_author;
    this.book_genre = book.book_genre;
    this.book_release_year = book.book_release_year;
    this.book_ISBN = book.book_ISBN;
    this.book_price = book.book_price;
};

Book.getAll = async () => {
    const query = 'SELECT * FROM books';
    const rows = await db.query(query);
    return rows;
};

Book.Add = async (req) => {
    const { book_id, book_name, book_author, book_genre, book_release_year, book_ISBN, book_price } = req.body;
    const query = `INSERT INTO books (book_id, book_name, book_author, book_genre, book_release_year, book_ISBN, book_price) VALUES ( ?, ?, ?, ?, ?, ?, ?)`
    await db.query(query, [
        book_id, book_name, book_author, book_genre, book_release_year, book_ISBN, book_price
    ]);
    return { message: 'Книга успішно додана!' };
}

Book.Delete = async (req) => {
    const { book_id } = req.body;
    const query = `DELETE FROM books WHERE book_id = ?`;
    await db.query(query, [book_id]);
    return { message: 'Книга успішно видалена!' };
};


module.exports = Book;
