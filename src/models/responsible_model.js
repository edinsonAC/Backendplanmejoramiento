const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Responsable = sequelizeDb.define(
    'responsable',
    {
        respId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'resp_id',
        },
        respNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'resp_nombre',
        },
    },
    {
        // Other model options go here
        tableName: 'responsable',
        timestamps: false
    },
);

module.exports = Responsable;
