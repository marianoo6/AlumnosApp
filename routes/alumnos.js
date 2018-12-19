var express = require('express');
var router = express.Router();
const alumnoModel = require('../models/alumno')

// GET /alumnos
router.get('/', (req, res) => {
	alumnoModel.getAll((err, rows) => {
		res.render('alumnos/main', {
			arrAlumnos: rows
		})
	})
	
})

module.exports = router;