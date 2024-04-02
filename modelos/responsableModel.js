let responsables = [];
  

function obtenerTodos() {
    return responsables;
}

function obtenerPorId(id) {
    return responsables.find(Responsable => Responsable.id === id);
}

function agregarResponsable(Responsable) {
    const nuevoId = responsables.length + 1;
    const nuevoResponsable = { id: nuevoId, ...Responsable };
    responsables.push(nuevoResponsable);
    return nuevoResponsable;
}

function actualizarResponsable(id, datos) {
    const index = responsables.findIndex(Responsable => Responsable.id === id);
    if (index !== -1) {
        responsables[index] = { ...responsables[index], ...datos };
        return true;
    }
    return false;
}

function eliminarResponsable(id) {
    const index = responsables.findIndex(Responsable => Responsable.id === id);
    if (index !== -1) {
        responsables.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = { obtenerTodos, obtenerPorId, agregarResponsable, actualizarResponsable, eliminarResponsable };
