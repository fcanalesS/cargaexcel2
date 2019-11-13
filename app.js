
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Gestión de Rutas
var uploadFileRouter = require('./routes/uploadFile');
var validaRouter = require('./routes/validarDatos');
var estadosRouter = require('./routes/obtieneEstados');
var descargarRouter = require('./routes/descargarArchivo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reproceso', uploadFileRouter);
app.use('/cuadratura-datos', validaRouter);
app.use('/obtiene-estados', estadosRouter);
app.use('/descargar', descargarRouter);


console.log("USER: ", process.env.USER);
console.log("PASSWORD: ", process.env.PASSWORD);
console.log("USER: ", process.env.USER);
console.log("HOST: ", process.env.HOST);


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
