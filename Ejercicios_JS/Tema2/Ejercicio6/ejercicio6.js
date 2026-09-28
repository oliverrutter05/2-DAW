function edadHumana(edadPerro) {
    return edadPerro * 7;
}

let edad;

while (true) {
    edad = prompt("Introduce la edad del perro:");

    if (edad === null) {
        break;
    }

    edad = edad.trim();

    if (edad === "") {
        alert("Error: debes introducir una edad.");
        continue;
    }

    let numero = Number(edad);

    if (!Number.isFinite(numero) || numero <= 0 || numero >= 30) {
        alert("Error: introduce un número mayor que 0 y menor que 30.");
        continue;
    }

    let resultado = edadHumana(numero);

    alert("La edad equivalente en años humanos es: " + resultado);

    break;
}