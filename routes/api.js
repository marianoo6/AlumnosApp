var express = require('express');
var router = express.Router();

const alumnosApiRouter = require('./api/alumnos')
const cursosApiRouter = require('./api/cursos')
const escuelasApiRouter = require('./api/escuelas')


router.use('/alumnos', alumnosApiRouter)
router.use('/cursos', cursosApiRouter)
router.use('/escuelas', escuelasApiRouter)



module.exports = router;