const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const EjeEstrategico = sequelizeDb.define(
    'ejeEstrategico',
    {
        ejesId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ejes_id',
        },
        ejesNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ejes_nombre',
        },
        pdiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'pdi_id',
            references: {
                model: 'planDesarrolloInstitucional',
                key: 'pdi_id'
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
        tableName: 'eje_estrategico',
    },
);

module.exports = EjeEstrategico;
