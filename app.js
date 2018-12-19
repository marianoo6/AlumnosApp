var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const apiRouter = require('./routes/api');
const alumnosRouter = require('./routes/alumnos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


let mysql = require('mysql')

// let connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'neoland',
// 	port: 8889
// })

// connection.connect((err) => {
// 	if (err) return console.log(err.message)
// 	console.log('Conexión realizada con éxito')
// 	connection.query('SELECT * FROM alumnos', (err, rows) => {
// 		if(err) return console.log(err.message)
		
// 	})

	// connection.query('INSERT INTO escuela VALUES (null, ?, ?, ?)', ['Neoland Bilbao', 'Calle falsa, 123', 'Bilbao'], (err, result) => {
	// 	if(err) return console.log(err.message)
	// 	console.log(result)
	// })
	
// })

app.get('', (req, res) => {
	res.render('home', {
		titulo: 'Titulo desde el Handler',
		parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni necessitatibus non alias id accusantium laborum sit fugiat, corrupti facilis voluptatibus. Beatae quo sit adipisci temporibus, numquam pariatur, iure nostrum repudiandae!',
		amigos: 32,
		showFooter: false
	})
});
app.get('/about', (req, res) => {
	res.render('sobremi')
});
app.use('/api', apiRouter);
app.use('/alumnos', alumnosRouter);

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
