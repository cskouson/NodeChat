/**
 * app.js
 * Description: This file sets up the Express.js portion of the server.
 * 
 * @author CJS
 */

//libs
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//route vars
var indexRouter = require('./routes/index');
var roomRouter = require('./routes/roomRT');

//express init
var app = express();

// view engine setup - Not currently needed
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware setup
app.use(logger('dev'));
//app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//set routes
app.use('/', indexRouter);
app.use('/room', roomRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
