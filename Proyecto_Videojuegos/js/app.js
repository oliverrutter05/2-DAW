import { catalogo } from "./datos.js";
import {
    crearTarjetasVideojuegos,
    ordenarPorPuntuacion,
    ordenarPorPrecio,
    existeCategoria,
    todosCumplenPrecioMinimo,
    filtrarPorCategoria,
    filtrarPorPuntuacionMinima,
    buscarPorIdentificador,
    buscarPorNombre,
    obtenerPosicionPorIdentificador,
    calcularPrecioPromedio,
    calcularPuntuacionPromedio,
    obtenerPropiedades,
    objetoAEntradas,
    crearObjetoDesdeEntradas
} from "./funciones.js";

/**
 * Inicia la aplicación cuando el documento HTML está preparado.
 */
document.addEventListener("DOMContentLoaded", () => {
    const listaVideojuegos = document.getElementById("lista-videojuegos");
    const resultadoEstadisticas = document.getElementById("resultado-estadisticas");
    const resultadoMejorValorados = document.getElementById("resultado-mejor-valorados");
    const resultadoVerificaciones = document.getElementById("resultado-verificaciones");
    const filtroCategoria = document.getElementById("filtro-categoria");
    const listaFiltrada = document.getElementById("lista-filtrada");
    const resultadoFiltro = document.getElementById("resultado-filtro");
    const resultadoDestacados = document.getElementById("resultado-destacados");
    const resultadoBusqueda = document.getElementById("resultado-busqueda");
    const resultadoAnalisis = document.getElementById("resultado-analisis");
    const resultadoMasEconomicos = document.getElementById("resultado-mas-economicos");

    // 1. Catálogo completo.
    listaVideojuegos.innerHTML = crearTarjetasVideojuegos(catalogo);
    document.getElementById("contador-catalogo").textContent = `${catalogo.length} videojuegos`;

    // Rellenar el selector con las categorías existentes.
    const categorias = [...new Set(catalogo.map(videojuego => videojuego.categoria))];
    categorias.forEach(categoria => {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria;
        filtroCategoria.appendChild(opcion);
    });

    // 2. Estadísticas generales.
    const precioMedio = calcularPrecioPromedio(catalogo);
    const puntuacionMedia = calcularPuntuacionPromedio(catalogo);
    resultadoEstadisticas.innerHTML = `
        <article class="tarjeta-estadistica"><span>Videojuegos</span><strong>${catalogo.length}</strong><small>En el catálogo</small></article>
        <article class="tarjeta-estadistica"><span>Precio promedio</span><strong>${precioMedio.toFixed(2)} €</strong><small>Por videojuego</small></article>
        <article class="tarjeta-estadistica"><span>Puntuación media</span><strong>${puntuacionMedia.toFixed(2)} / 10</strong><small>Valoración general</small></article>
    `;

    // 3. Cinco videojuegos con mayor puntuación.
    const mejorValorados = ordenarPorPuntuacion(catalogo).slice(0, 5);
    resultadoMejorValorados.innerHTML = mejorValorados.map((videojuego, indice) => `
        <article class="elemento-clasificacion">
            <span class="posicion-clasificacion">${["🥇", "🥈", "🥉", "4", "5"][indice]}</span>
            <div><strong>${videojuego.nombre}</strong><small>${videojuego.categoria}</small></div>
            <strong class="valor-clasificacion">★ ${videojuego.puntuacion.toFixed(1)}</strong>
        </article>
    `).join("");

    // 4. Verificaciones con some() y every().
    const existeAccion = existeCategoria(catalogo, "Acción y aventura");
    const existeDeportes = existeCategoria(catalogo, "Deportes");
    const todosMasDe20 = todosCumplenPrecioMinimo(catalogo, 20);
    const todosMasDe10 = todosCumplenPrecioMinimo(catalogo, 10);

    const crearEstado = (texto, resultado) => `
        <article class="tarjeta-comprobacion">
            <span class="estado-comprobacion ${resultado ? "es-verdadero" : "es-falso"}">${resultado ? "Sí" : "No"}</span>
            <p>${texto}</p>
        </article>
    `;
    resultadoVerificaciones.innerHTML =
        crearEstado('¿Existe la categoría "Acción y aventura"?', existeAccion) +
        crearEstado('¿Existe la categoría "Deportes"?', existeDeportes) +
        crearEstado("¿Todos los videojuegos cuestan al menos 20 €?", todosMasDe20) +
        crearEstado("¿Todos los videojuegos cuestan al menos 10 €?", todosMasDe10);

    // 5. Filtro por categoría.
    document.getElementById("boton-filtrar").addEventListener("click", () => {
        const categoria = filtroCategoria.value;
        const resultado = categoria === "todas" ? catalogo : filtrarPorCategoria(catalogo, categoria);
        listaFiltrada.innerHTML = crearTarjetasVideojuegos(resultado);
        resultadoFiltro.textContent = `${resultado.length} videojuego(s) encontrado(s).`;
    });

    document.getElementById("boton-mostrar-videojuegos").addEventListener("click", () => {
        filtroCategoria.value = "todas";
        listaFiltrada.innerHTML = crearTarjetasVideojuegos(catalogo);
        resultadoFiltro.textContent = `Mostrando los ${catalogo.length} videojuegos del catálogo.`;
    });

    // 6. Videojuegos premium: puntuación igual o superior a 9.
    const videojuegosDestacados = filtrarPorPuntuacionMinima(catalogo, 9);
    resultadoDestacados.innerHTML = crearTarjetasVideojuegos(videojuegosDestacados);

    // 7. Búsquedas por ID y nombre; también mostramos la posición (findIndex).
    function mostrarResultadoBusqueda(videojuego, mensaje) {
        if (!videojuego) {
            resultadoBusqueda.innerHTML = `<p class="mensaje mensaje--error">${mensaje}: no se ha encontrado ningún videojuego.</p>`;
            return;
        }
        const posicion = obtenerPosicionPorIdentificador(catalogo, videojuego.identificador) + 1;
        resultadoBusqueda.innerHTML = `
            <p class="mensaje mensaje--correcto">${mensaje}: videojuego encontrado.</p>
            ${crearTarjetasVideojuegos([videojuego])}
            <p class="nota-posicion">Posición en el catálogo: ${posicion} de ${catalogo.length}</p>
        `;
    }

    document.getElementById("boton-buscar-identificador").addEventListener("click", () => {
        const identificador = document.getElementById("buscar-identificador").value;
        if (!identificador.trim()) {
            resultadoBusqueda.innerHTML = '<p class="mensaje mensaje--error">Introduce un identificador para realizar la búsqueda.</p>';
            return;
        }
        mostrarResultadoBusqueda(buscarPorIdentificador(catalogo, identificador), "Búsqueda por identificador");
    });

    document.getElementById("buscar-identificador").addEventListener("keydown", evento => {
        if (evento.key === "Enter") document.getElementById("boton-buscar-identificador").click();
    });

    document.getElementById("boton-buscar-nombre").addEventListener("click", () => {
        const nombre = document.getElementById("buscar-nombre").value;
        if (!nombre.trim()) {
            resultadoBusqueda.innerHTML = '<p class="mensaje mensaje--error">Introduce un nombre para realizar la búsqueda.</p>';
            return;
        }
        mostrarResultadoBusqueda(buscarPorNombre(catalogo, nombre), "Búsqueda por nombre");
    });

    document.getElementById("buscar-nombre").addEventListener("keydown", evento => {
        if (evento.key === "Enter") document.getElementById("btn-buscar-nombre").click();
    });

    // 8. Análisis con Object.keys(), Object.entries() y Object.fromEntries().
    document.getElementById("btn-analizar").addEventListener("click", () => {
        const primerVideojuego = catalogo[0];
        const propiedades = obtenerPropiedades(primerVideojuego);
        const entradas = objetoAEntradas(primerVideojuego);
        const nuevoObjeto = crearObjetoDesdeEntradas(entradas);

        resultadoAnalisis.innerHTML = `
            <article class="tarjeta-analisis">
                <h3>Object.keys()</h3>
                <p>Propiedades del primer videojuego:</p>
                <code>${propiedades.join(", ")}</code>
            </article>
            <article class="tarjeta-analisis">
                <h3>Object.entries()</h3>
                <p>Pares de propiedad y valor:</p>
                <pre>${JSON.stringify(entradas, null, 2)}</pre>
            </article>
            <article class="tarjeta-analisis">
                <h3>Object.fromEntries()</h3>
                <p>Nuevo objeto creado a partir de las entradas:</p>
                <pre>${JSON.stringify(nuevoObjeto, null, 2)}</pre>
            </article>
        `;
    });

    // 9. Cinco videojuegos más baratos.
    const masEconomicos = ordenarPorPrecio(catalogo).slice(0, 5);
    resultadoMasEconomicos.innerHTML = masEconomicos.map((videojuego, indice) => `
        <article class="elemento-clasificacion">
            <span class="posicion-clasificacion">${indice + 1}</span>
            <div><strong>${videojuego.nombre}</strong><small>${videojuego.categoria}</small></div>
            <strong class="valor-clasificacion">${videojuego.precio} €</strong>
        </article>
    `).join("");

    // Año actualizado automáticamente.
    document.getElementById("anio-actual").textContent = new Date().getFullYear();
});
