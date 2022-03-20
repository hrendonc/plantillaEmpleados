const tbody = document.querySelector('tbody')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

let datos = 'http://localhost:3001/empleados'
console.log(datos)

const mostrarDatos = ()=>{

    datos.forEach((dato, index) => {
        const clone = template.cloneNode(true)

        let info = `Empleado: ${datos[index].empleado}
                    Nombre: ${datos[index].nombre}
                    Apellidos: ${datos[index].apellidos}
                    Puesto: ${datos[index].puesto}
                    Adscripción: ${datos[index].adscripcion}`

        let setBC = `http://bwipjs-api.metafloor.com/?bcid=code128&scale=3&text=${datos[index].empleado}&includetext`
        let setQr = `http://bwipjs-api.metafloor.com/?bcid=qrcode&text=${info}`

        clone.querySelector('th').textContent = dato.empleado
        clone.querySelectorAll('td')[0].textContent = dato.nombre
        clone.querySelectorAll('td')[1].textContent = dato.apellidos
        clone.querySelectorAll('td')[2].textContent = dato.puesto
        clone.querySelectorAll('td')[3].textContent = dato.adscripcion
        clone.querySelectorAll('td')[4].innerHTML = `<img src="" id="${dato.empleado}" />`
        clone.querySelectorAll('td')[5].innerHTML = `<img src="" id="${dato.empleado+1}" />`

        clone.getElementById(dato.empleado).setAttribute("src", setQr)
        clone.getElementById(dato.empleado+1).setAttribute("src", setBC)

        fragment.appendChild(clone)
    });

    tbody.appendChild(fragment)
}

mostrarDatos()


