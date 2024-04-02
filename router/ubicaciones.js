const express = require('express');
const router = express.Router();
const ubicacionController = require('../controladores/ubicacionController');

router.get('/', ubicacionController.listarUbicacions);
router.get('/:id', ubicacionController.obtenerUbicacion);
router.post('/', ubicacionController.crearUbicacion);
router.put('/:id', ubicacionController.actualizarUbicacion);
router.delete('/:id', ubicacionController.eliminarUbicacion);

module.exports = router;
