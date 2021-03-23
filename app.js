var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//init app
var app = express();
var packagesRouter = require('./routes/packages');
var contactRouter = require('./routes/contact');

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

//Add Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.use('/packages', packagesRouter);
app.use('/contact', contactRouter);

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
