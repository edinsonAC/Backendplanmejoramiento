const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Ejecucion = sequelizeDb.define(
    'ejecucion',
    {
        ejecId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ejec_id',
        },
        ejecDescripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ejec_descripcion',
        },
        ejecSemestre: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ejec_semestre',
        },
        ejecAnio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ejec_anio',
        },
        ejecAvance: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ejec_avance',
        },
        ejecFechaEjecucion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ejec_fecha_ejecucion',
        },
        tareId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'tare_id',
            references: {
                model: 'Tarea',
                key: 'tare_id'
            }
        },
        usuaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'usua_id',
            references: {
                model: 'Usuario',
                key: 'usua_id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'updated_at',
        },
    },
    {
        // Other model options go here
        tableName: 'ejecucion',
    },
);

module.exports = Ejecucion;
