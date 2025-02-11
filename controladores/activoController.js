const activoModel = require('../modelos/activoModel');

function listarActivos(req, res) {
    res.json(activoModel.obtenerTodos());
}

function obtenerActivo(req, res) {
    const id = parseInt(req.params.id);
    const activo = activoModel.obtenerPorId(id);
    if (activo) {
        res.json(activo);
    } else {
        res.status(404).send('Activo no encontrado');
    }
}

function crearActivo(req, res) {
    const nuevoActivo = req.body;

    activoModel.agregarActivo(nuevoActivo);
    res.status(201).send('Activo creado con éxito');
}

function actualizarActivo(req, res) {
    const id = parseInt(req.params.id);
    const datosActivo = req.body;
    const resultado = activoModel.actualizarActivo(id, datosActivo);
    if (resultado) {
        res.send('Activo actualizado con éxito');
    } else {
        res.status(404).send('Activo no encontrado');
    }
}

function eliminarActivo(req, res) {
    const id = parseInt(req.params.id);
    const resultado = activoModel.eliminarActivo(id);
    if (resultado) {
        res.send('Activo eliminado con éxito');
    } else {
        res.status(404).send('Activo no encontrado');
    }
}

module.exports = { listarActivos, obtenerActivo, crearActivo, actualizarActivo, eliminarActivo };
