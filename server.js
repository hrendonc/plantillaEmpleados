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

//Midleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Archivos Estaticos
app.use('/', express.static('public'))

// Listen
app.listen(PORT, ()=>{
    console.log('Escuchando en puerto ', PORT);
});
