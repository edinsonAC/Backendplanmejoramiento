const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const PlanMejoramiento = sequelizeDb.define(
    'planMejoramiento',
    {
        plmeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'plme_id',
        },
        plmeNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'plme_nombre',
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
        pracId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'prac_id',
            references: {
                model: 'ProgramaAcademico',
                key: 'prac_id'
            }
        },
        plmeSemestreInicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'plme_semestre_inicio',
        },
        plmeAnioInicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'plme_anio_inicio',
        },
        plmeSemestreFin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'plme_semestre_fin',
        },
        plmeAnioFin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'plme_anio_fin',
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
        tableName: 'plan_mejoramiento',
    },
);

module.exports = PlanMejoramiento;
