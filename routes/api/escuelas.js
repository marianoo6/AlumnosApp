var express = require('express');
var router = express.Router();

const escuelaModel = require('../../models/escuela')

// GET http://localhost:3000/api/escuelas/
router.get('', (req, res) => {
	escuelaModel.getAll((err, rows) => {
		if(err) return res.json({error: err.message })
		res.json(rows)
	})
})

// GET http://localhost:3000/api/escuelas/3 
router.get('/:idEscuela', (req, res) => {
	escuelaModel.getById(req.params.idEscuela, (err, rows) => {
		if(rows.length === 0) {
			res.json({error: 'El id de la escuela no existe'})
		} else {
			res.json(rows[0])	
		}
	})
})

// POST http://localhost:3000/api/escuelas/
router.post('/', (req, res) => {
	escuelaModel.insert(req.body, (err, result) => {
		if (err) return res.json ({ error: err.message })
		escuelaModel.getById(result.insertId, (err, rows) => {
			res.json(rows[0])
		})
 	})
})

module.exports = router;