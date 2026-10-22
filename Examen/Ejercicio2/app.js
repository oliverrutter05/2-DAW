
let importe = 120;
let descuento = 10;

if(importe >= 100) {
    let aplicarDescuento = importe * (descuento / 100);
    let importeTotal = importe - aplicarDescuento;

    console.log("Descuento añadido: " + importeTotal + "€");

}
else {
    consolelog("Descuento no añadido: " + importe + "€");
}