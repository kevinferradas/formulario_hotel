// Control del nombre y apellido del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change", () => {

    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')

    errorNombre.textContent = ""
    if (nombreRevisado.length < 2) {        
        errorNombre.textContent = "El nombre debe tener al menos dos caracteres"
        nombreForm.focus() // impi
    }
})



// Control de la fecha




// Ventana emergente

const dialog = document.querySelector('#resumen')
// const cierraVentana = document.querySelector('#cierraVentana')

// cierraVentana.addEventListener('click', () => {
//     dialog.close()
// })

// Obtener los datos del formulario

//lo que se coloca dentro de los corchetes es el name ( en este caso, formReserva)
const formReserva = document.forms['formReserva']

formReserva.addEventListener('submit', (e) => {
    // para evitar que la página se recargue sola y se borren los datos.
    e.preventDefault()
    // lo va dentro de los corchetes es el name
    console.log(formReserva['nombre'].value);
    console.log(formReserva['estancia'].value);

    let resumenReserva = `<p>Reserva realizada a nombre de <span class="textoPrincipal">${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`

    const textoResumen = document.querySelector('#textoResumen')

    textoResumen.innerHTML = resumenReserva

    // Muestra el <dialog> en modo modal, lo que bloquea la interacción con el resto de la página hasta que se cierre.
    dialog.showModal()
    // dialog.show()--> Muestra el <dialog>, pero permite que el usuario interactúe con el resto de la página.

    
})