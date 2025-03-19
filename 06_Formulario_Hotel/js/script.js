// Control del nombre y apellido del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change",() =>{

    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')
    errorNombre.textContent= ""

    if (nombreRevisado.length<2) {
        
        errorNombre.textContent= "El nombre debe tener al menos dos caracteres"
        nombreForm.focus()
    }
})

// Control de la fecha

let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
today = today.toISOString().split("T")[0]
tomorrow = tomorrow.toISOString().split('T')[0]

const entrada = document.querySelector('#entrada')
entrada.setAttribute("min",today)
entrada.setAttribute("value",today)

const salida = document.querySelector('#salida')
salida.setAttribute("min",tomorrow)
salida.setAttribute("value",tomorrow)

entrada.addEventListener('change',() => {

    salida = new Date(entrada.value)
    salida.setDate(salida.getDate() + 1)
    salida = salida.toISOString().split('T')[0]

    let fechaSalida = document.querySelector("#salida")
    fechaSalida.setAttribute("min", salida)
    fechaSalida.setAttribute("value",salida)
})



// Ventana emergente

const dialog = document.querySelector('#resumen')
const cierraVentana = document.querySelector('#cierraVentana')

cierraVentana.addEventListener('click',() => {

    dialog.close()
})

// Obtener los datos del formulario

const formReserva = document.forms['formReserva']

        formReserva.addEventListener("submit", (e) => {
            // para evitar que la página se recargue sola y se borren los datos.
            e.preventDefault()
            // lo va dentro de los corchetes es el name
            console.log(formReserva['nombre'].value);
            console.log(formReserva['estancia'].value);
            let resumenReserva = `<p>Reserva realizada a nombre de <span class="textoPrincipal">${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`

            const textoResumen = document.querySelector('#textoResumen')
            textoResumen.innerHTML = resumenReserva
            dialog.showModal()
            formReserva.reset()
            
            // resultadoFormulario.textContent += myForm['nombre'].value + " "
            // resultadoFormulario.textContent += myForm['password'].value + " "
            // resultadoFormulario.textContent += myForm['numero'].value + " "
            // alert(myForm['colores'].value)
        })