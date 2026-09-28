let numeros = [-4, -2, -8, -1, -3, -6];

let producto = 1;

for(let i = 0; i < numeros.length; i++) {
    producto = producto * numeros[i];
}

console.log("Producto: ", producto);

let mayorNumero = numeros[0];

for(let i = 1; i < numeros.length;i++) {
    if(numeros[i] > mayorNumero){
        mayorNumero = numeros[i];
    }
}

console.log("Mayor número: ", mayorNumero);

let sumaTotal = 0;

for(let i = 0; i < numeros.length; i++) {
    sumaTotal = sumaTotal + numeros[i];
}

let media = sumaTotal/numeros.length;

console.log("Media: ", media);