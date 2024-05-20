const {Sequelize} = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const sequelizeDb = new Sequelize(
    dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: 'postgres'
    });

sequelizeDb.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {sequelizeDb}