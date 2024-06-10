const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Tarea = sequelizeDb.define(
    'tarea',
    {
        tareId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'tare_id',
        },
        tareNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_nombre',
        },
        tareDescripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_descripcion',
        },
        tarePeso: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_peso',
        },
        tareMeta: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_meta',
        },
        tareLineaBase: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_linea_base',
        },
        tareDocumentoLineaBase: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_documento_linea_base',
        },
        tareRecursos: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_recursos',
        },
        tareOrden: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_orden',
        },
        tareFechaInicio: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_fecha_inicio',
        },
        tareFechaFin: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tare_fecha_fin',
        },
        acmeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'acme_id',
            references: {
                model: 'AccioMejora',
                key: 'acme_id'
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
        respId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'resp_id',
            references: {
                model: 'Responsable',
                key: 'resp_id'
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
        tableName: 'tarea',
    },
);

module.exports = Tarea;
