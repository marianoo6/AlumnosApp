var express = require('express');
var router = express.Router();

const cursoModel = require('../../models/curso')

// GET http://localhost:3000/api/cursos/
router.get('', (req, res) => {
	cursoModel.getAll((err, rows) => {
		if(err) return res.json({error: err.message })
		res.json(rows)
	})
})

// GET http://localhost:3000/api/cursos/3 
router.get('/:idCurso', (req, res) => {
	cursoModel.getById(req.params.idCurso, (err, rows) => {
		if(rows.length === 0) {
			res.json({error: 'El id del curso no existe'})
		} else {
			res.json(rows[0])	
		}
	})
})

// POST http://localhost:3000/api/cursos/
router.post('/', (req, res) => {
	cursoModel.insert(req.body, (err, result) => {
		if (err) return res.json ({ error: err.message })
		cursoModel.getById(result.insertId, (err, rows) => {
			res.json(rows[0])
		})
 	})
})

module.exports = router;