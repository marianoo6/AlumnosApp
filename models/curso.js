const db = require('../db')

exports.getAll = (done) => {
	db.get().query('SELECT * FROM cursos', (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.getById = (idCurso, done) => {
	db.get().query('SELECT * FROM cursos WHERE id=? LIMIT 1', [idCurso], (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.insert = ({ titulo, cantidadhoras, convocatoria}, done) => {
	db.get().query('INSERT INTO cursos VALUES (null, ?, ?, ?)', [titulo, parseInt(cantidadhoras), convocatoria], (err, result) => {
		if(err) return done(err, null)
		done(null, result)
	})
}