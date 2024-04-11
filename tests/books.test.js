const request = require('supertest');
const app = require('../app');

require('dotenv').config();

describe('GET /books', () => {
    it('should return all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('POST /books/new', () => {
    it('should add a book', async () => {
        const res = await request(app).post('/books/new').send({
            book_id: 10,
            book_name: `testName`,
            book_author: `testAuthor`,
            book_genre: `testGenre`,
            book_release_year: `2024-01-01`,
            book_ISBN: `00010`,
            book_price: 100
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.book_name).toBe('testName');
    });
});

// describe('GET /users', () => {
//     it('should return all users', async () => {
//         const res = await request(app).get('/users');
//         expect(res.statusCode).toBe(200);
//         expect(res.body.length).toBeGreaterThan(0);
//     });
// });

// describe('POST /users/new', () => {
//     it('should add a user', async () => {
//         const res = await request(app).post('/users/new').send({
//             firstName: 'TestFirstName',
//             lastName: 'TestLastName',
//             email: 'test@b.com',
//         });
//         expect(res.statusCode).toBe(201);
//         expect(res.body.email).toBe('test@b.com');
//     });
// });