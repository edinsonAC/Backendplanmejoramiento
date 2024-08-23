const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const PlanDesarrolloInstitucional = sequelizeDb.define(
    'planDesarrolloInstitucional',
    {
        pdiId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'pdi_id',
        },
        pdiNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'pdi_nombre',
        },
        pdiDescripcion: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'pdi_descripcion',
        },
        pdiPeriodo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'pdi_periodo',
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
        tableName: 'plan_desarrollo_institucional',
    },
);

module.exports = PlanDesarrolloInstitucional;
