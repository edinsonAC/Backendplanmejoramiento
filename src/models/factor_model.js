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
        factDescripcion: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'fact_descripcion',
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
        acueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'acue_id',
            references: {
                model: 'acuerdo',
                key: 'acue_id'
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
