'use strict'

var app = require('./src/app');
const PORT = process.env.PORT || 3000;
const {swaggerDocs} = require('./src/config/swagger')

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO ', PORT)

    swaggerDocs(app, PORT)
})