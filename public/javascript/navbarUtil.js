function renderizarNavbar() {
    let rutas = {
        index: 'index.html',
        galeria : 'views/galeria.html',
        presupuesto : 'views/presupuesto.html',
        contacto: 'views/contacto.html'
    }

    let rutaLogo = 'public/imagenes/logo.png'

    const navbar = document.getElementById('navbar')

    const location = window.location.pathname;

    const separarLocation = location.split('/');

    const checarSiEsViews = separarLocation.includes('views');

    if (checarSiEsViews) {
        rutas = {
            index: '../index.html',
            galeria : 'galeria.html',
            presupuesto : 'presupuesto.html',
            contacto: 'contacto.html'
        }

        rutaLogo = '../public/imagenes/logo.png'
    }

    navbar.innerHTML =
        `<nav class="navbar navbar-expand-lg bg-light">
                <div>
                    <a class="navbar-brand" href="#">
                        <img src="${rutaLogo}" alt="Bootstrap" width="100" height="100">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="${rutas.index}">Inicio</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="${rutas.galeria}">Galeria</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="${rutas.presupuesto}">Presupuesto</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="${rutas.contacto}">Contacto</a>
                        </li>
                    </ul>
                </div>
        </nav>`
}

renderizarNavbar();