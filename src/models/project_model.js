const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Proyecto = sequelizeDb.define(
    'proyecto',
    {
        proyId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'proy_id',
        },
        proyNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'proy_nombre',
        },
        plmeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'plme_id',
            references: {
                model: 'PlanMejoramiento',
                key: 'plme_id'
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
        tableName: 'proyecto',
    },
);

module.exports = Proyecto;
