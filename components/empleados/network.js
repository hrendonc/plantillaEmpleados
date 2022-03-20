const express = require('express')
const response = require('../../network/response') //Importar mensajes de respuestas
const controller = require('./controller') //Importamos el controlador
const router = express.Router()

router.get('/', (req, res)=>{
    controller.getEmpleados()
    .then((empleadosList)=>{
        response.success(req, res, empleadosList, 202)
    })
    .catch(e=>{
        response.error(req, res, 'Error inisperado!', 500, e)
    })
})

router.post('/', (req, res)=>{
    controller.addEmpleado(req.body.numero, req.body.nombre, req.body.apellidos, req.body.categoria, req.body.adscripcion)
    .then((fullEmpleado)=>{
        response.success(req, res, 'Información de ' + fullEmpleado.nombre + ' agregada correctamente!', 202)
    })
    .catch(e=>{
        response.error(req, res, 'Error inesperado!', 400, e) 
    })
})

module.exports = router