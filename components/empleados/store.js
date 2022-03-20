const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb+srv://root:toor@cluster0.fda5w.mongodb.net/plantilla?retryWrites=true&w=majority'

db.Promise = global.Promise
db.connect(uri, { useNewUrlParser:true, useUnifiedTopology:true })
.then(()=>  console.log('Conectado a MongoDB!'))
.catch(e=> console.log('Error de conexión!', e))

function addEmpleado(empleado){
    const newEmpleado = new Model(empleado)
    newEmpleado.save()
}

async function getEmpleados(){
    const empleados = await Model.find()
    return empleados
}

module.exports = {
    add: addEmpleado,
    list: getEmpleados
}