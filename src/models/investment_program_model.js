const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const ProgramaInversion = sequelizeDb.define(
    'programaInversion',
    {
        prinId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'prin_id',
        },
        prinNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'prin_nombre',
        },
        liesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ejes_id',
            references: {
                model: 'EjeEstrategico',
                key: 'lies_id'
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
        tableName: 'programa_inversion',
    },
);

module.exports = ProgramaInversion;
