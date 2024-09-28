function validarFormulario() 
{
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre'); 
    const apellidos = document.getElementById ('apellidos');
    const telefono = document.getElementById ('telefono');
    const email = document.getElementById ('email');
    const enviarFormulario = document.getElementById('enviarFormulario');
    const productoSeleccionado = document.getElementById('producto');
    const plazoSeleccionado = document.getElementById('plazo');

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
    let valorAcumulado = 0;
    let precioFinal = 0;

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

    })

    productoSeleccionado.addEventListener('change', function () {
        const producto = this.value;
        const options = this.options;

        let valorDelProducto = 0;

        for (let i = 0; i < options.length; i++) {
            if (options[i].value === producto) {
                options[i].setAttribute('selected', 'selected');

                valorDelProducto = parseFloat(options[i].value);
            } else {
                options[i].removeAttribute('selected');
            }
        }

        valorAcumulado = valorDelProducto;
        esValido = true;

        return
    });

    plazoSeleccionado.addEventListener('change', function () {
        const plazo = parseInt(this.value);

        if (plazo === "" || isNaN(plazo)) {
            document.getElementById('errorPlazo').textContent = "Debes seleccionar un plazo.";

            esValido = false;
            return;
        }

        esValido = true;

        return
    });

    
    window.addEventListener('change', function () {
        precioFinal = calcularPresupuesto(valorAcumulado, plazoSeleccionado.value);
        
        this.document.getElementById('presupuestoFinal').innerHTML = `${precioFinal.toFixed(2)} €`;
        
        return; 
    });

    enviarFormulario.addEventListener('click', function (event) {
        let estaSeleccionado = document.getElementById ('condiciones').checked;
        let productos = productoSeleccionado.options
        let productoPorDefecto = false;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].selected && productos[i].value === "0") {
                productoPorDefecto = true;
                break;
               
            }
        }

        if(! esValido || ! estaSeleccionado || productoPorDefecto) {
            event.preventDefault();

            alert('Errores de validacion');
            
            return
        }


        alert('Formulario enviado correctamente');
    })

    return;
}

function calcularPresupuesto(valor, plazo) 
{
    const extra1 = document.getElementById('extra1');
    const extra2 = document.getElementById('extra2');
    const extra3 = document.getElementById('extra3');
    const extra4 = document.getElementById('extra4');
    const extra5 = document.getElementById('extra5');


    if (extra1.checked) {
        valor += parseFloat(extra1.value);
    }

    if (extra2.checked) {
        valor += parseFloat(extra2.value);
    }

    if (extra3.checked) {
        valor += parseFloat(extra3.value);
    }

    if (extra4.checked) {
        valor += parseFloat(extra4.value);
    }

    if (extra5.checked) {
        valor += parseFloat(extra5.value);
    }

    if(plazo > 0 && plazo <= 3) {
        valor = valor - (valor * 0.05);
    }

    return valor;
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
