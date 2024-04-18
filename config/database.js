const { Sequelize, DataTypes } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('web_33', 'desarrolloweb', 'desarrolloweb', {
    dialect: 'postgres', // O el dialecto que estés utilizando
    host: 'localhost', // O la dirección de tu base de datos
});

const Ubicacion = sequelize.define('Ubicacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
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

const Responsable = sequelize.define('Responsable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroEmpleado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

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

// Relaciones
Activo.belongsTo(Ubicacion, { foreignKey: 'ubicacionId' });
Activo.belongsTo(Responsable, { foreignKey: 'responsableId' });

(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Conexión con la base de datos establecida y modelos sincronizados.');
    } catch (error) {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    }
})();


module.exports = sequelize;