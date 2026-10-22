
const precios = [10, 20, 100];
let incrementarPrecio = 0.21;

let preciosConIva = precios.map(p => {
    p *= incrementarPrecio;
});

console.log(precios);
console.log(preciosConIva);

