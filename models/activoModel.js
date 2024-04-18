const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Activo = sequelize.define('Activo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroSerie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroInventarioUABC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function obtenerTodos() {
    try {
        const activos = await Activo.findAll();
        return activos;
    } catch (error) {
        throw new Error('Error al obtener los activos');
    }
}

async function obtenerPorId(id) {
    try {
        const activo = await Activo.findByPk(id);
        return activo;
    } catch (error) {
        throw new Error('Error al obtener el activo');
    }
}

async function agregarActivo(nuevoActivo) {
    try {
        await Activo.create(nuevoActivo);
    } catch (error) {
        throw new Error('Error al crear el activo');
    }
}

async function actualizarActivo(id, datosActivo) {
    try {
        const activo = await Activo.findByPk(id);
        if (activo) {
            await activo.update(datosActivo);
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al actualizar el activo');
    }
}

async function eliminarActivo(id) {
    try {
        const activo = await Activo.findByPk(id);
        if (activo) {
            await activo.destroy();
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al eliminar el activo');
    }
}

module.exports = { Activo, obtenerTodos, obtenerPorId, agregarActivo, actualizarActivo, eliminarActivo };