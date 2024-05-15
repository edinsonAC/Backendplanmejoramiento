'use strict'

var app = require('./src/app');
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO ', PORT)
})