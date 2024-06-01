'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const authRoute = require('./routes/auth_route')
const userTypeRoute = require('./routes/user_type_route')

const academicProgramRoutes = require('./routes/academic_program_routes')
const factorTypeRoutes = require('./routes/factor_type_route')
const factorRoutes = require('./routes/factor_route')
const strategicAxisRoute = require('./routes/strategic_axis_route')
const strategicLineRoute = require('./routes/strategic_line_route')
const investmentProgramRoute = require('./routes/investment_program_route')
const processRoute = require('./routes/process_route')
const situationTypeRoute = require('./routes/situation_type_route')
const responsibleRoute = require('./routes/responsible_route')

//CORS
// Configurar cabeceras y cors
const allowedOrigins = ['https://d1uwk0hpr2aoq5.cloudfront.net', 'http://localhost:5173'];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas

app.use('/', authRoute, userTypeRoute, processRoute, situationTypeRoute, responsibleRoute,
    academicProgramRoutes, factorTypeRoutes, factorRoutes, strategicAxisRoute, strategicLineRoute, investmentProgramRoute)

module.exports = app;

