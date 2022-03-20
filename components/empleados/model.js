const mongoose = require('mongoose')
const Schema = mongoose.Schema //Obtenemos la clase Schema para usarla directamente

//Creando el esquema
const mySchema = new Schema({
    numero: String,
    nombre: String,
    apellidos: String,
    categoria: String,
    adscripcion: String,
    date: Date
})

//Creando el modelo con el nombre de la colección y nuestro esquema
const model = mongoose.model('Empleado', mySchema)

module.exports = model