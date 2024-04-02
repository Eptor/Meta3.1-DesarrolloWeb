const express = require('express');
const app = express();
app.use(express.json());

const activoController = require('./controladores/activoController');
const ubicacionController = require('./controladores/ubicacionController');
const responsableController = require('./controladores/responsableController');

// Rutas para Activos
app.get('/activos', activoController.listarActivos);
app.get('/activos/:id', activoController.obtenerActivo);
app.post('/activos', activoController.crearActivo);
app.put('/activos/:id', activoController.actualizarActivo);
app.delete('/activos/:id', activoController.eliminarActivo);

// Rutas para Ubicaciones
app.get('/ubicaciones', ubicacionController.listarUbicacions);
app.get('/ubicaciones/:id', ubicacionController.obtenerUbicacion);
app.post('/ubicaciones', ubicacionController.crearUbicacion);
app.put('/ubicaciones/:id', ubicacionController.actualizarUbicacion);
app.delete('/ubicaciones/:id', ubicacionController.eliminarUbicacion);

// Rutas para Responsables
app.get('/responsables', responsableController.listarResponsables);
app.get('/responsables/:id', responsableController.obtenerResponsable);
app.post('/responsables', responsableController.crearResponsable);
app.put('/responsables/:id', responsableController.actualizarResponsable);
app.delete('/responsables/:id', responsableController.eliminarResponsable);


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
