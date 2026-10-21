
export function mostrarVideojuegos(catalogo) {
    catalogo.forEach(videojuego =>{
        console.log(
            '${videojuego.nombre} | Categoria: ${videojuego.categoria} | Precio: ${videojuego.precio} € | Puntuación: ${videojuego.puntuacion}'
        );
    });
}

export function ordenarPorPuntacion(catalogo) {
    return [...catalogo].sort((a, b) => b.puntuacion - a.puntuacion);
}

export function hayVideojuegosDestacados(catalogo) {
    return catalogo.some(videojuego => videojuego.puntuacion >= 9);
}

