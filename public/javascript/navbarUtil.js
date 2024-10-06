function renderizarNavbar() {
    let rutas = {
        index: 'index.html',
        galeria: 'views/galeria.html',
        presupuesto: 'views/presupuesto.html',
        contacto: 'views/contacto.html'
    }

    let rutaLogo = 'public/imagenes/logo.png';

    const navbar = document.getElementById('navbar');

    //Obtener la ruta actual del navegador
    const location = window.location.pathname;

    //Separar ka ruta para verificar si estamos en una subcarpeta "views"
    const separarLocation = location.split('/');

    const checarSiEsViews = separarLocation.includes('views');

    //Si estamos en "views", ajustar las rutas relativas 
    if (checarSiEsViews) {
        rutas = {
            index: '../index.html',
            galeria: 'galeria.html',
            presupuesto: 'presupuesto.html',
            contacto: 'contacto.html'
        }

        rutaLogo = '../public/imagenes/logo.png';
    }

    navbar.innerHTML =
        `<nav class="navbar navbar-expand-lg bg-light navbar-fixed">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="${rutaLogo}" alt="Logo" width="100" height="100">
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" id="nav-inicio" href="${rutas.index}">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-galeria" href="${rutas.galeria}">Galería</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-presupuesto" href="${rutas.presupuesto}">Presupuesto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-contacto" href="${rutas.contacto}">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

        //Detectar la pagina en la que estamos y añadir la clase "active" al enlace correspondiente
        if (location.includes('index.html')) {
            document.getElementById ('nav-inicio').classList.add('active');
        } else if (location.includes('galeria.html')) {
            document.getElementById ('nav-galeria').classList.add('active');
        } else if (location.includes ('presupuesto.html')) {
            document.getElementById ('nav-presupuesto').classList.add('active');
        } else if (location.includes ('contacto.html')) {
            document.getElementById ('nav-contacto').classList.add('active');
        }
}

renderizarNavbar();
