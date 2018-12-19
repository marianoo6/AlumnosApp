var express = require('express');
var router = express.Router();

const alumnoModel = require('../../models/alumno')

// GET http://localhost:3000/api/alumnos/
router.get('', (req, res) => {
	alumnoModel.getAll((err, rows) => {
		if(err) return res.json({error: err.message })
		res.json(rows)
	})
})

// DELETE /api/alumnos/4

// PUT PATCH /api/alumnos/4
// UPDATE /alumnos SET nombre=""... WHERE id=req.params.idUser

// GET http://localhost:3000/api/alumnos/3 
router.get('/:idUser', (req, res) => {
	alumnoModel.getById(req.params.idUser, (err, rows) => {
		if(rows.length === 0) {
			res.json({error: 'El id del alumno no existe'})
		} else {
			res.json(rows[0])	
		}
	})
})

// POST http://localhost:3000/api/alumnos/
router.post('/', (req, res) => {
	alumnoModel.insert(req.body, (err, result) => {
		if (err) return res.json ({ error: err.message })
		alumnoModel.getById(result.insertId, (err, rows) => {
			res.json(rows[0])
		})
 	})
})

// GET api/alumnos
// POST api/alumnos/new
// POST api/alumnos/edit

module.exports = router;