const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { measureExecutionTime, gatherRequestStatistics } = require('./middleware/books.middleware'); // middlewares
const indexRouter = require('./routes/index');
const booksRouter = require(`./routes/books`)

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(measureExecutionTime); // middleware1
app.use(gatherRequestStatistics); // middleware2
app.use('/', indexRouter);
app.use(`/books`, booksRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // set locals, only providing error in library
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'library' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
