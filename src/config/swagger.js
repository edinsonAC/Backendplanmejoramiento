const swaggerJSDocs = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Plan Mejoramiento',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDocs(options);

const swaggerDocs = (app, port) => {
    app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = {swaggerDocs}