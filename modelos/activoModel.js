let activos = [
    {
      id: 1,
      numeroSerie: "XYZ123",
      numeroInventarioUABC: "INV001",
      tipo: "Computadora",
      descripcion: "Laptop marca Dell, modelo XPS 15",
      ubicacion: "Edificio A, Sala 101",
      responsable: "Juan Pérez",
      imagen: "url-a-imagen-de-la-laptop.jpg"
    },
    {
      id: 2,
      numeroSerie: "XYZ456",
      numeroInventarioUABC: "INV002",
      tipo: "Mobiliario",
      descripcion: "Mesa de trabajo de madera, 4 puestos",
      ubicacion: "Edificio B, Sala 204",
      responsable: "Ana Martínez",
      imagen: "url-a-imagen-de-la-mesa.jpg"
    },
    {
      id: 3,
      numeroSerie: "XYZ789",
      numeroInventarioUABC: "INV003",
      tipo: "Equipo electrónico",
      descripcion: "Proyector Epson modelo EB-X41",
      ubicacion: "Edificio C, Auditorio",
      responsable: "Carlos Gómez",
      imagen: "url-a-imagen-del-proyector.jpg"
    }
  ];
  

function obtenerTodos() {
    return activos;
}

function obtenerPorId(id) {
    return activos.find(activo => activo.id === id);
}

function agregarActivo(activo) {
    const nuevoId = activos.length + 1;
    const nuevoActivo = { id: nuevoId, ...activo };
    activos.push(nuevoActivo);
    return nuevoActivo;
}

function actualizarActivo(id, datos) {
    const index = activos.findIndex(activo => activo.id === id);
    if (index !== -1) {
        activos[index] = { ...activos[index], ...datos };
        return true;
    }
    return false;
}

function eliminarActivo(id) {
    const index = activos.findIndex(activo => activo.id === id);
    if (index !== -1) {
        activos.splice(index, 1);
        return true;
    }
    return false;
}


module.exports = { obtenerTodos, obtenerPorId, agregarActivo, actualizarActivo, eliminarActivo };
