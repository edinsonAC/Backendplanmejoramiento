const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const TipoFactor = sequelizeDb.define(
    'tipoFactor',
    {
        tifaId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'tifa_id',
        },
        tifaNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tifa_nombre',
        },
    },
    {
        // Other model options go here
        tableName: 'tipo_factor',
        timestamps: false
    },
);

module.exports = TipoFactor;
