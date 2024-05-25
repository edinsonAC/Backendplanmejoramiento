const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const TipoUsuario = sequelizeDb.define(
    'tipoUsuario',
    {
        tiusId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'tius_id',
        },
        tiusNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tius_nombre',
        },
    },
    {
        // Other model options go here
        tableName: 'tipo_usuario',
        timestamps: false
    },
);

module.exports = TipoUsuario;
