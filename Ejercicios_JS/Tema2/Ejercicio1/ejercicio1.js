let colores = ["rojo", "verde", "azul", "amarillo"];

let colorBuscado = "   Negro   ";

colorBuscado = colorBuscado.trim().toLowerCase();

if(colores.includes(colorBuscado)) {
    console.log("El color está en la lista");
} else {
    console.log("El color NO está en la lista")
}
