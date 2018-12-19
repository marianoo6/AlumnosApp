const db = require('../db')

exports.getAll = (done) => {
	db.get().query('SELECT * FROM alumnos', (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.getById = (idUser, done) => {
	db.get().query('SELECT * FROM alumnos WHERE id=? LIMIT 1', [idUser], (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.insert = ({ nombre, matricular, email, notamedia, edad, fechanacimiento, sexo, fk_escuelas }, done) => {
	db.get().query('INSERT INTO alumnos VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, matricular, email, parseInt(notamedia), parseInt(edad), fechanacimiento, sexo, parseInt(fk_escuelas)], (err, result) => {
		if(err) return done(err, null)
		done(null, result)
	})
}