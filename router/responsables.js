const express = require('express');
const router = express.Router();
const responsableController = require('../controllers/responsableController');

router.get('/', responsableController.listarResponsables);
router.get('/:id', responsableController.obtenerResponsable);
router.post('/', responsableController.crearResponsable);
router.put('/:id', responsableController.actualizarResponsable);
router.delete('/:id', responsableController.eliminarResponsable);

module.exports = router;
