const store = require('./store')

const addEmpleado = (numero, nombre, apellidos, categoria, adscripcion) =>{
    return new Promise((resolve, reject)=>{
        if (!numero || !nombre || !apellidos || !categoria || !adscripcion) {
            console.error('[empleadoController] - No se recibio algún dato importante')
            return reject('Datos incompletos!')
        }

        const fullEmpleado = {
            numero,
            nombre,
            apellidos,
            categoria,
            adscripcion,
            fecha: new Date()
        }

        store.add(fullEmpleado)
        resolve(fullEmpleado)
    })   
}

const getEmpleados = ()=>{
    return new Promise ((resolve, reject)=>{
        resolve (store.list())
    })
}

module.exports = {
    addEmpleado,
    getEmpleados,
}