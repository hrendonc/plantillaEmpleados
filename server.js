const express = require('express')
const router = require('./network/routes') // Importamos el módulo de rutas
require('dotenv').config(); //Variables de entorno

const app = express()

// Obtener datos del cliente (Body/Query)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Configuraciónes
const PORT = process.env.PORT || 3000;

router(app)

// Archivos Estaticos
app.use('/', express.static('public'))

// Listen
app.listen(PORT, ()=>{
    console.log('Escuchando en puerto ', PORT);
});
