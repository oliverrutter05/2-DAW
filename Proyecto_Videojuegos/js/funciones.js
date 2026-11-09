/**
 * Genera las tarjetas HTML de un conjunto de videojuegos.
 * @param {Array} videojuegos - Videojuegos que se mostrarán.
 * @returns {string} HTML de las tarjetas.
 */
export function crearTarjetasVideojuegos(videojuegos) {
    return videojuegos.map(videojuego => `
        <article class="tarjeta-videojuego">
            <div class="tarjeta-videojuego__imagen">
                <img src="${videojuego.imagen}" alt="Carátula de ${videojuego.nombre}" loading="lazy"
                     onerror="this.style.display='none'; this.parentElement.classList.add('imagen-alternativa');">
                <span class="tarjeta-videojuego__puntuacion">★ ${videojuego.puntuacion.toFixed(1)}</span>
            </div>
            <div class="tarjeta-videojuego__contenido">
                <span class="tarjeta-videojuego__categoria">${videojuego.categoria}</span>
                <h3>${videojuego.nombre}</h3>
                <p class="tarjeta-videojuego__datos">${videojuego.plataforma} · ${videojuego.desarrolladora}</p>
                <div class="tarjeta-videojuego__pie">
                    <span class="tarjeta-videojuego__identificador">${videojuego.identificador}</span>
                    <strong>${videojuego.precio} €</strong>
                </div>
            </div>
        </article>
    `).join("");
}

/**
 * Ordena una copia del catálogo por puntuación, de mayor a menor.
 * @param {Array} videojuegos - Catálogo original.
 * @returns {Array} Nuevo array ordenado.
 */
export function ordenarPorPuntuacion(videojuegos) {
    return [...videojuegos].sort((videojuegoA, videojuegoB) => videojuegoB.puntuacion - videojuegoA.puntuacion);
}

/**
 * Ordena una copia del catálogo por precio, de menor a mayor.
 * @param {Array} videojuegos - Catálogo original.
 * @returns {Array} Nuevo array ordenado.
 */
export function ordenarPorPrecio(videojuegos) {
    return [...videojuegos].sort((videojuegoA, videojuegoB) => videojuegoA.precio - videojuegoB.precio);
}

/**
 * Comprueba si existe algún videojuego de una categoría.
 * @param {Array} videojuegos - Catálogo.
 * @param {string} categoria - Categoría que se comprobará.
 * @returns {boolean} true si existe.
 */
export function existeCategoria(videojuegos, categoria) {
    return videojuegos.some(videojuego => videojuego.categoria === categoria);
}

/**
 * Comprueba si todos los videojuegos superan o igualan un precio.
 * @param {Array} videojuegos - Catálogo.
 * @param {number} precio - Precio mínimo.
 * @returns {boolean} true si todos cumplen.
 */
export function todosCumplenPrecioMinimo(videojuegos, precio) {
    return videojuegos.every(videojuego => videojuego.precio >= precio);
}

/**
 * Devuelve los videojuegos de una categoría.
 * @param {Array} videojuegos - Catálogo.
 * @param {string} categoria - Categoría seleccionada.
 * @returns {Array} Videojuegos coincidentes.
 */
export function filtrarPorCategoria(videojuegos, categoria) {
    return videojuegos.filter(videojuego => videojuego.categoria === categoria);
}

/**
 * Devuelve los videojuegos que alcanzan una puntuación mínima.
 * @param {Array} videojuegos - Catálogo.
 * @param {number} puntuacion - Puntuación mínima.
 * @returns {Array} Videojuegos coincidentes.
 */
export function filtrarPorPuntuacionMinima(videojuegos, puntuacion) {
    return videojuegos.filter(videojuego => videojuego.puntuacion >= puntuacion);
}

/**
 * Busca un videojuego por su identificador.
 * @param {Array} videojuegos - Catálogo.
 * @param {string} identificador - Identificador buscado.
 * @returns {Object|undefined} Videojuego encontrado.
 */
export function buscarPorIdentificador(videojuegos, identificador) {
    return videojuegos.find(videojuego => videojuego.identificador.toLowerCase() === identificador.trim().toLowerCase());
}

/**
 * Busca un videojuego por su nombre, sin distinguir mayúsculas.
 * @param {Array} videojuegos - Catálogo.
 * @param {string} nombre - Nombre buscado.
 * @returns {Object|undefined} Videojuego encontrado.
 */
export function buscarPorNombre(videojuegos, nombre) {
    return videojuegos.find(videojuego => videojuego.nombre.toLowerCase().includes(nombre.trim().toLowerCase()));
}

/**
 * Obtiene la posición de un videojuego dentro del catálogo mediante su identificador.
 * @param {Array} videojuegos - Catálogo.
 * @param {string} identificador - Identificador buscado.
 * @returns {number} Índice del videojuego o -1 si no existe.
 */
export function obtenerPosicionPorIdentificador(videojuegos, identificador) {
    return videojuegos.findIndex(videojuego => videojuego.identificador.toLowerCase() === identificador.trim().toLowerCase());
}

/**
 * Calcula el precio medio utilizando forEach.
 * @param {Array} videojuegos - Catálogo.
 * @returns {number} Precio medio.
 */
export function calcularPrecioPromedio(videojuegos) {
    let suma = 0;
    videojuegos.forEach(videojuego => {
        suma += videojuego.precio;
    });
    return videojuegos.length === 0 ? 0 : suma / videojuegos.length;
}

/**
 * Calcula la puntuación media utilizando forEach.
 * @param {Array} videojuegos - Catálogo.
 * @returns {number} Puntuación media.
 */
export function calcularPuntuacionPromedio(videojuegos) {
    let suma = 0;
    videojuegos.forEach(videojuego => {
        suma += videojuego.puntuacion;
    });
    return videojuegos.length === 0 ? 0 : suma / videojuegos.length;
}

/**
 * Obtiene los nombres de las propiedades de un objeto.
 * @param {Object} objeto - Objeto que se analizará.
 * @returns {Array} Claves del objeto.
 */
export function obtenerPropiedades(objeto) {
    return Object.keys(objeto);
}

/**
 * Convierte las propiedades de un objeto en pares clave-valor.
 * @param {Object} objeto - Objeto que se convertirá.
 * @returns {Array} Entradas del objeto.
 */
export function objetoAEntradas(objeto) {
    return Object.entries(objeto);
}

/**
 * Crea un objeto a partir de un array de entradas.
 * @param {Array} entradas - Pares [clave, valor].
 * @returns {Object} Nuevo objeto.
 */
export function crearObjetoDesdeEntradas(entradas) {
    return Object.fromEntries(entradas);
}
