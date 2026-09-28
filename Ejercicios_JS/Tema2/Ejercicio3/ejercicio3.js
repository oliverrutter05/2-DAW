let persona = {
    nombre: "Laura",
    edad: 24,
    profresion: "desarrolladora",

    describir: function() {
        return `${this.nombre}, ${this.edad}, ${this.profresion}`
    }
}

console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Profesión: ", persona.profresion);

console.log(persona.describir());

persona.edad = 25;

console.log(persona.describir());

