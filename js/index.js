// --- Elementos de Cuadros (Mantener) ---
const cuadro4 = document.querySelector('.cuadro4');
const cuadro5 = document.querySelector('.cuadro5');
const botonSeleccionadorDeseado = document.getElementById('second'); 
const botonFirst = document.getElementById('first');

// --- Nuevos Elementos (Contenido) ---
const botonesSelectores = document.querySelectorAll('.btn-selector');
// Obtiene todos los grupos de contenido: #content-first, #content-second, etc.
const contenidosSelectores = document.querySelectorAll('.contenido-selector');


// -----------------------------------------------------
// 💡 FUNCIÓN CENTRAL: Gestiona la visibilidad del contenido y los cuadros
// -----------------------------------------------------
function actualizarContenido(idBotonSeleccionado) {
    // A. GESTIÓN DE VISIBILIDAD DE CONTENIDO (Imágenes y Títulos)
    contenidosSelectores.forEach(contenido => {
        // El ID del contenido debe coincidir con 'content-' + ID del botón seleccionado
        if (contenido.id === `content-${idBotonSeleccionado}`) {
            contenido.classList.add('visible'); // Lo hace visible
        } else {
            contenido.classList.remove('visible'); // Oculta los demás
        }
    });

    // B. GESTIÓN DE SUPERPOSICIÓN (Cuadro 4 y 5)
    // El cambio de z-index ocurre SOLAMENTE si el botón seleccionado es 'second'
    const esElBotonSecond = idBotonSeleccionado === 'second';

    if (cuadro4) {
        if (esElBotonSecond) {
            cuadro4.classList.add('activo-arriba');
        } else {
            cuadro4.classList.remove('activo-arriba');
        }
    }
    
    if (cuadro5) {
        if (esElBotonSecond) {
            cuadro5.classList.add('activo-arriba');
        } else {
            cuadro5.classList.remove('activo-arriba');
        }
    }
}


// -----------------------------------------------------
// 🚀 FUNCIÓN DE INICIALIZACIÓN
// -----------------------------------------------------
function inicializarEstado() {
    let idBotonInicial = 'first'; // Establece 'first' como el ID por defecto

    // Si el botón 'first' existe, nos aseguramos de que tenga la clase 'seleccionado'
    if (botonFirst) {
        botonFirst.classList.add('seleccionado');
    }

    // Llamamos a la función central para establecer el estado inicial de contenido y cuadros
    actualizarContenido(idBotonInicial);
}

// -----------------------------------------------------
// 1. INICIO: Llamamos a la función de inicialización al cargar.
// -----------------------------------------------------
inicializarEstado();


// -----------------------------------------------------
// 2. LÓGICA DE CLIC
// -----------------------------------------------------
if (botonesSelectores.length > 0) {
    botonesSelectores.forEach(botonActual => {
        botonActual.addEventListener('click', function() {
            
            // GESTIÓN DE SELECCIÓN (Quita de todos, añade al actual)
            botonesSelectores.forEach(boton => {
                boton.classList.remove('seleccionado');
            });
            this.classList.add('seleccionado');

            // Actualiza el contenido y los cuadros con el ID del botón clicado
            actualizarContenido(this.id);
        });
    });
}
