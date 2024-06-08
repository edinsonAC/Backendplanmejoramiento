const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const ProgramaAcademico = sequelizeDb.define(
    'programaAcademico',
    {
        pracId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'prac_id',
        },
        pracNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'prac_nombre',
        },
        pracCodigo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'prac_codigo',
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
        tableName: 'programa_academico',
        timestamps: false
    },
);

module.exports = ProgramaAcademico;
