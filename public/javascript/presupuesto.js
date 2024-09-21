function validarFormulario() 
{
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre'); //Obtiene el valor
    const apellidos = document.getElementById ('apellidos');
    const telefono = document.getElementById ('telefono');
    const email = document.getElementById ('email');
    const condiciones = document.getElementById ('condiciones'); //Para saber si el checkbox está marcado o no
    const enviarFormulario = document.getElementById('enviarFormulario');

    //Regex para validaciones de los formatos especificados
    const regexNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,15}$/; //Para la comprobación de letras y espacios
    const regexApellidos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/; 
    const regexTelefono = /^[0-9]{9}$/; // Para la comprobación de números 
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Comprobación del campo de Email


    //Borrar mensajes de error previos 
    document.getElementById ('errorNombre').textContent = "";
    document.getElementById ('errorApellidos').textContent = "";
    document.getElementById ('errorTelefono').textContent = "";
    document.getElementById ('errorEmail').textContent = "";

    let esValido = false;

    //Validaciones
    nombre.addEventListener('input', function() {
        const nombre = this.value;

        if (! regexNombre.test(nombre)) {
            document.getElementById('errorNombre').textContent = "El nombre solo debe contener letras y máximo 15 caracteres.";
            
            esValido = false;
            return;
            
        }

        document.getElementById('errorNombre').textContent = "";
        esValido = true;

        return;
    });

    apellidos.addEventListener('input', function () {
        const apellidos = this.value;

        if (!regexApellidos.test(apellidos)) {
            document.getElementById('errorApellidos').textContent = "Los apellidos solo deben contener letras y máximo 40 caracteres.";

            esValido = false;
            return;
        }

        document.getElementById('errorApellidos').textContent = "";
        esValido = true;

        return;
    })

    telefono.addEventListener('input', function () {
        const telefono = this.value;

        if (!regexTelefono.test(telefono)) {
            document.getElementById('errorTelefono').textContent = "El teléfono debe tener 9 dígitos.";

            esValido = false;
            return;
        }

        document.getElementById('errorTelefono').textContent = "";

        esValido = true;
        return;
    })

    email.addEventListener('input', function () {
        const email = this.value;

        if (!regexEmail.test(email)) {
            document.getElementById('errorEmail').textContent = "El formato del correo electrónico no es válido.";

            esValido = false;
            return;
        }

        document.getElementById('errorEmail').textContent = "";

        esValido = true;
        return;

    })


    enviarFormulario.addEventListener('click', function (event) {
        let estaSeleccionado = document.getElementById ('condiciones').checked;

        if(!esValido && !estaSeleccionado) {
            event.preventDefault();

            alert('Errores de validacion');
            
            return
        }
    })

    return;
}

function calcularPresupuesto() 
{
    let total = 0;

    // Obtener el precio del producto
    const producto = parseInt(document.getElementById('producto').value);
    if (!isNaN(producto)) total += producto;

    // Obtener el plazo (descuento del 5% por cada mes adicional)
    const plazo = parseInt(document.getElementById('plazo').value);
    if (!isNaN(plazo) && plazo > 1) {
        total -= total * ((plazo - 1) * 0.05);
    }

    // Sumar extras
    const extra1 = document.getElementById('extra1').checked ? parseInt(document.getElementById('extra1').value) : 0;
    const extra2 = document.getElementById('extra2').checked ? parseInt(document.getElementById('extra2').value) : 0;
    const extra3 = document.getElementById('extra3').checked ? parseInt(document.getElementById('extra3').value) : 0;

    total += extra1 + extra2 + extra3;

    // Actualizar el presupuesto final
    document.getElementById('presupuestoFinal').textContent = `$${total.toFixed(2)}`;
}

validarFormulario()
calcularPresupuesto()
