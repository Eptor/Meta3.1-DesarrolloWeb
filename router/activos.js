const express = require('express');
const router = express.Router();
const activoController = require('../controladores/activoController');

router.get('/', activoController.listarActivos);
router.get('/:id', activoController.obtenerActivo);
router.post('/', activoController.crearActivo);
router.put('/:id', activoController.actualizarActivo);
router.delete('/:id', activoController.eliminarActivo);

module.exports = router;
