
const notas = [6, 8, 4, 10];
let notasNuevas = [];

function calcularMedia(nota) {
    if(notas.length === 0) {
        return null;
    }

    const suma = notas.reduce((suma, valor) => {
        return suma + valor;
    }, 0)
    return suma;
}

console.log(calcularMedia(notas));
console.log(calcularMedia(notasNuevas));
