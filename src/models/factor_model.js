const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Factor = sequelizeDb.define(
    'factor',
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
            field: 'fact_nombre',
        },
        tifaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'tifa_id',
            references: {
                model: 'TipoFactor',
                key: 'tifa_id'
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
        tableName: 'factor',
    },
);

module.exports = Factor;
