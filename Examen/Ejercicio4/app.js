
const notas = [4, 7, 5, 3, 9, 6];

let suspensos = 0;
let aprobados = 0;

for(let i = 0; i < notas.length; i++) {
    if(notas[i] >= 5) {
        aprobados++
    }
    else {
        suspensos++;
    }
}

console.log("Aprobados: " + aprobados);
console.log("Suspensos: " + suspensos);