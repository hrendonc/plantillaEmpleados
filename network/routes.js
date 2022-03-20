const express = require('express')
const empleado = require('../components/empleados/network')

// Creando servidor de rutas
const routes = function(server){
    server.use('/empleados', empleado)
}

module.exports = routes