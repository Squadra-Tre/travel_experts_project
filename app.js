var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//init app
var app = express();
var packagesRouter = require('./routes/packages');
var contactRouter = require('./routes/contact');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const indexRouter = require('./routes/index');
const signinRouter = require('./routes/signin');
const bookRouter = require('./routes/book');
var addRouter = require('./routes/add');

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// For my-passport.js
require("./my-passport").init(app);


//Add Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/packages', packagesRouter);
app.use('/contact', contactRouter);
app.use('/sign-in', signinRouter);
app.use('/book', bookRouter);
app.use('/add', addRouter);

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
