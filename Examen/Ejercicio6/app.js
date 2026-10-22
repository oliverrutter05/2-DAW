
const cliente = { nombre: "Ana", descuento: 0 };

if(cliente.nombre ?? null) {
    console.log(`${cliente.nombre} | Descuento: ${cliente.descuento}`);
}
else {
    let descuentoAplicado = 10;
    console.log(`${cliente.nombre} | Descuento: ${descuentoAplicado}`);
}


