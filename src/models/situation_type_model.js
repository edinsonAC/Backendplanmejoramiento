const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const TipoSituacion = sequelizeDb.define(
    'TipoSituacion',
    {
        tisiId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'tisi_id',
        },
        tisiNombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tisi_nombre',
        },
    },
    {
        // Other model options go here
        tableName: 'tipo_situacion',
        timestamps: false
    },
);

module.exports = TipoSituacion;
