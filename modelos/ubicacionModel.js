let ubicaciones = [
    {
        id: 1,
        nombre: "Edificio A, Sala 101",
        descripcion: "Ubicación de la sala 101 del edificio A",
        imagen: "url-a-imagen-de-la-ubicacion.jpg"
    },
    {
        id: 2,
        nombre: "Edificio B, Sala 204",
        descripcion: "Ubicación de la sala 204 del edificio B",
        imagen: "url-a-imagen-de-la-ubicacion.jpg"
    },
    {
        id: 3,
        nombre: "Edificio C, Auditorio",
        descripcion: "Ubicación del auditorio del edificio C",
        imagen: "url-a-imagen-de-la-ubicacion.jpg"
    }
];


function obtenerTodos() {
    return ubicaciones;
}

function obtenerPorId(id) {
    return ubicaciones.find(Ubicacion => Ubicacion.id === id);
}

function agregarUbicacion(Ubicacion) {
    const nuevoId = ubicaciones.length + 1;
    const nuevoUbicacion = {id: nuevoId, ...Ubicacion};
    ubicaciones.push(nuevoUbicacion);
    return nuevoUbicacion;
}

function actualizarUbicacion(id, datos) {
    const index = ubicaciones.findIndex(Ubicacion => Ubicacion.id === id);
    if (index !== -1) {
        ubicaciones[index] = {...ubicaciones[index], ...datos};
        return true;
    }
    return false;
}

function eliminarUbicacion(id) {
    const index = ubicaciones.findIndex(Ubicacion => Ubicacion.id === id);
    if (index !== -1) {
        ubicaciones.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = {obtenerTodos, obtenerPorId, agregarUbicacion, actualizarUbicacion, eliminarUbicacion};
