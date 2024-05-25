const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Admin = sequelizeDb.define(
    'administrador',
    {
        admiId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'admi_id',
        },
        admiUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'admi_usuario',
        },
        admiClave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'admi_clave',
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
        tableName: 'administrador',
    },
);

module.exports = Admin;
