'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const academic_program_routes = require('./routes/academic_program_routes')

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas

app.use('/',
    academic_program_routes)

module.exports = app;

