function validarFormulario() 
{
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre'); 
    const apellidos = document.getElementById ('apellidos');
    const telefono = document.getElementById ('telefono');
    const email = document.getElementById ('email');
    const condiciones = document.getElementById ('condiciones'); 
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
    });

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
    });

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

    });

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
    const extra4 = document.getElementById('extra4').checked ? parseInt(document.getElementById('extra4').value) : 0;
    const extra5 = document.getElementById('extra5').checked ? parseInt(document.getElementById('extra5').value) : 0;

    total += extra1 + extra2 + extra3 + extra4 + extra5;

    // Actualizar el presupuesto final
    document.getElementById('presupuestoFinal').textContent = `$${total.toFixed(2)}`;
}

const plazo = parseInt(document.getElementById('plazo').value);

// Definir un descuento máximo (ejemplo: 30% de descuento para el menor plazo)
const descuentoMaximo = 0.30;

// Verificar que el plazo sea un número válido
if (!isNaN(plazo) && plazo > 0) {
    // Calcular el descuento en base al plazo
    // El descuento disminuye a medida que aumenta el plazo, con un descuento máximo para el plazo más corto (1 mes)
    let descuento = ((12 - plazo) / 12) * descuentoMaximo;
    
    // Asegurarse de que el descuento no sea menor que 0
    if (descuento < 0) {
        descuento = 0;
    }

    // Aplicar el descuento al total
    total -= total * descuento;
}



validarFormulario()
calcularPresupuesto()
