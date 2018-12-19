const db = require('../db')

exports.getAll = (done) => {
	db.get().query('SELECT * FROM escuela', (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.getById = (idEscuela, done) => {
	db.get().query('SELECT * FROM escuela WHERE id=? LIMIT 1', [idEscuela], (err, rows) => {
		if(err) return done(err, null)
		done(null, rows)
	})
}

exports.insert = ({ nombreescuela, direccion, localidad}, done) => {
	db.get().query('INSERT INTO escuela VALUES (null, ?, ?, ?)', [nombreescuela, direccion, localidad], (err, result) => {
		if(err) return done(err, null)
		done(null, result)
	})
}