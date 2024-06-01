const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Proceso = sequelizeDb.define(
    'proceso',
    {
        procId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'proc_id',
        },
        procNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'proc_nombre',
        },
    },
    {
        // Other model options go here
        tableName: 'proceso',
        timestamps: false
    },
);

module.exports = Proceso;
