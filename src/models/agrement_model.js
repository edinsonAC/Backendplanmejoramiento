const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Acuerdo = sequelizeDb.define(
    'acuerdo',
    {
        acueId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'acue_id',
        },
        acueNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'acue_nombre',
        },
        acueDescripcion: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'acue_descripcion',
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
        tableName: 'acuerdo',
    },
);

module.exports = Acuerdo;
