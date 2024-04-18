let responsables = [
    {
        id: 1,
        numeroEmpleado: "EMP001",
        nombre: "Juan Pérez",
        activosCustodia: ["XYZ123", "XYZ456"],
        imagen: "url-a-imagen-del-responsable.jpg"
    },
    {
        id: 2,
        numeroEmpleado: "EMP002",
        nombre: "Ana Martínez",
        activosCustodia: ["XYZ789"],
        imagen: "url-a-imagen-de-ana.jpg"
    },
    {
        id: 3,
        numeroEmpleado: "EMP003",
        nombre: "Carlos Gómez",
        activosCustodia: [],
        imagen: "url-a-imagen-de-carlos.jpg"
    },
    {
        id: 4,
        numeroEmpleado: "EMP004",
        nombre: "María López",
        activosCustodia: [],
        imagen: "url-a-imagen-de-maria.jpg"
    }
];


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
