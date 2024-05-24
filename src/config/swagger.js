const swaggerUi = require("swagger-ui-express")
const swaggerJSDocs = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'Plan Mejoramiento',
            description: `
        Este proyecto web está dirigido a la carrera de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander.
        El sistema web tiene como objetivo principal la gestión eficiente de los planes de mejoramiento necesarios para la acreditación de alta calidad de la carrera.
        A través de este sistema, se pueden gestionar los diversos aspectos relacionados con la planificación, seguimiento y evaluación de los planes de mejoramiento,
        asegurando que se cumplan con los estándares requeridos para lograr la acreditación de alta calidad.

        ### Características del Sistema
        - **Gestión de Planes de Mejoramiento**: Permite la creación, edición y seguimiento de los planes de mejoramiento.
        - **Evaluación de Avances**: Proporciona herramientas para evaluar el progreso de los planes de mejoramiento.
        - **Reportes y Análisis**: Genera reportes detallados y análisis sobre el estado de los planes.
        - **Integración con Otros Sistemas**: Se integra con otros sistemas académicos para un flujo de información más eficiente.

        ### Público Objetivo
        - **Profesores**: Pueden acceder y contribuir a los planes de mejoramiento.
        - **Directores de programa**: Gestionan y supervisan los procesos de acreditación y planes de mejoramiento.
        - **Evaluadores Externos**: Pueden revisar y evaluar el cumplimiento de los estándares de acreditación.

        ### Tecnologías Utilizadas
        - **Backend**: Node.js con Sequelize para la gestión de bases de datos.
        - **Frontend**: React js  para una interfaz de usuario intuitiva y responsive.
        - **Base de Datos**: PostgreSQL para una gestión robusta y eficiente de los datos.
      `
        },
        servers: [
            {
                url: 'http://localhost:3030/',
                description: 'Servidor de desarrollo',
            },
            {
                url: 'https://api.universidad.edu.co',
                description: 'Servidor de producción',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app, port) => {
    app.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = {swaggerDocs}