let coche = {
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2020,

    calcularAntiguedad: function() {
        let anioActual = new Date().getFullYear();

        if(!Number.isInteger(this.anio) || this.anio < 1886 ||this.anioo > anioActual) {
            return null;
        }

        return anioActual - this.anio;
    }
}

let antiguedad = coche.calcularAntiguedad();

if(antiguedad === null) {
    console.log("Año no válido")
} else {
    console.log("La antigüedad del coche es de " + antiguedad + " años.")
}