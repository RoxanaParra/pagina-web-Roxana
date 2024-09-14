function obtenernoticiasdelJson() {
    return fetch('public/noticias.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error', error)
        });
}

function mostrarnoticias() {
    const noticias = obtenernoticiasdelJson()

    noticias.then(data => {
        const noticiasContainer = document.getElementById('noticiasContainer')

        Object.values(data).forEach(producto => {
            noticiasContainer.innerHTML +=
                `<div class= "col">
                    <div class="card" style="width: 18rem;">
                        <img src=${producto.imagen} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-tittle">${producto.titulo}</h5>
                            <p class="card-text">${producto.cuerpo}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>`
        });
    })
}

obtenernoticiasdelJson()
mostrarnoticias()

function obtenerTestimoniosdelJson() {
    return fetch('public/testimonios.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error', error)
        });
}

function mostrarTestimonios() {
    const testimonios = obtenerTestimoniosdelJson()

    testimonios.then(data => {
        const testimoniosContainer = document.getElementById('testimoniosContainer')

        Object.values(data).forEach(cliente => {
            testimoniosContainer.innerHTML +=
                `<div class= "col-lg-4 col-md-6 col-sm-12 my-3">
                    <div class="card custom-card" style="width: 18rem;">
                        <img src=${cliente.imagen} class="custom-img" alt="...">
                        <div class="custom-card-body">
                            <h5 class="custom-title">${cliente.titulo}</h5>
                            <p class="custom-text">${cliente.cuerpo}</p>
                        </div>
                    </div>
                </div>`
        });
    })
}

obtenerTestimoniosdelJson()
mostrarTestimonios()

    