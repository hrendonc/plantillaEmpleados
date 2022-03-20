const express = require('express')
const router = require('./network/routes') // Importamos el módulo de rutas

const app = express()

// Obtener datos del cliente (Body/Query)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

router(app)

// Archivos Estaticos
app.use('/', express.static('public'))

app.listen(3000)
console.log('Escuchando en puerto 3000')