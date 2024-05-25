const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Usuario = sequelize.define(
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
            field: 'usua_apellido',
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
                model: 'TipoUsuario',
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
    },
);


module.exports = Usuario;