const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const Usuario = sequelizeDb.define(
    'usuario',
    {
        usuaId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'usua_id',
        },
        usuaNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usua_nombre',
        },
        usuaApellido: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usua_apellido',
        },
        usuaCorreo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usua_correo',
        },
        usuaFoto: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usua_foto',
        },
        tiusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'tius_id',
            references: {
                model: 'TipoUsuario',
                key: 'tius_id'
            }
        },
        pracId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'prac_id',
            references: {
                model: 'ProgramaAcademico',
                key: 'prac_id'
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
        tableName: 'usuario',
    },
);


module.exports = Usuario;