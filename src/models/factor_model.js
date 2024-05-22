const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Factor = sequelizeDb.define(
    'Factor',
    {
        factId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'fact_id',
        },
        factNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'prac_nombre',
        },
        tifaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'prac_codigo',
        },
        createdAt: {
            type: DataTypes.NOW,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.NOW,
            field: 'updated_at',
        },
    },
    {
        // Other model options go here
        tableName: 'factor',
    },
);

module.exports = Factor;
