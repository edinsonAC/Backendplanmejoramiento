const {DataTypes} = require('sequelize');
const {sequelizeDb} = require('../config/database');

const AccionMejora = sequelizeDb.define(
    'accionMejora',
    {
        acmeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'acme_id',
        },
        acmeDescripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'acme_descripcion',
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
        procId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'proc_id',
            references: {
                model: 'Proceso',
                key: 'proc_id'
            }
        },
        factId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'fact_id',
            references: {
                model: 'Factor',
                key: 'fact_id'
            }
        },
        tisiId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'tisi_id',
            references: {
                model: 'TipoSituacion',
                key: 'tisi_id'
            }
        },
        prinId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'prin_id',
            references: {
                model: 'ProgramaInversion',
                key: 'prin_id'
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
        tableName: 'accion_mejora',
    },
);

module.exports = AccionMejora;
