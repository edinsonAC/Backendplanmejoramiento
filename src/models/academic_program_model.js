const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database')

const ProgramaAcademico = sequelize.define(
    'ProgramaAcademico',
    {
        pracId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pracNombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pracCodigo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
    },
);

module.exports = ProgramaAcademico;
