function obtenerProductosdelJson() {
    return fetch('public/productos.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error', error)
        });
}

function mostrarProductos() {
    const productos = obtenerProductosdelJson()

    productos.then(data => {
        const productosContainer = document.getElementById('productosContainer')

        Object.values(data).forEach(producto => {
            productosContainer.innerHTML +=
                `<div class= "col">
                    <div class="card" style="width: 18rem;">
                        <img src=${producto.imagen} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-tittle">${producto.titulo}</h5>
                            <p class="card-text">${producto.cuerpo}</p>
                            <a href="views/presupuesto.html" class="btn">Comprar</a>
                        </div>
                    </div>
                </div>`
        });
    })
}


obtenerProductosdelJson()
mostrarProductos()



    