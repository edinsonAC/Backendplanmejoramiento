const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const LineaEstrategica = sequelizeDb.define(
    'lineaEstrategica',
    {
        liesId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'lies_id',
        },
        liesNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'lies_nombre',
        },
        liesObjetivos: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'lies_objetivos',
        },
        ejesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ejes_id',
            references: {
                model: 'EjeEstrategico',
                key: 'ejes_id'
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
        tableName: 'linea_estrategica',
    },
);

module.exports = LineaEstrategica;
