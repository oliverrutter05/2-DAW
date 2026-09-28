let tienda = {
    productos: [
        { nombre: "Cuaderno", precio: 4 },
        { nombre: "Bolígrafo", precio: 2 },
        { nombre: "Mochila", precio: 25 }
    ],

    calcularTotal: function() {
        let total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }

        return total;
    }
};

let total = tienda.calcularTotal();

console.log("Total: " + total.toFixed(2) + " €");


tienda.productos = [];

let totalVacio = tienda.calcularTotal();

console.log("Total con array vacío: " + totalVacio.toFixed(2) + " €");