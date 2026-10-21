const contenedor = document.querySelector(".grid");

tienda.forEach(function(disco)  {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = disco.caratula;
    imagen.alt = "Carátula de " + disco.titulo;

    imagen.onerror = function() {
        imagen.onerror = null;
        imagen.src = "./img/imagen-defecto.jpg";
        imagen.style.opacity = "0.5";
    }

    const titulo = document.createElement("h2");
    titulo.textContent = disco.titulo;

    const artista = document.createElement("p");
    artista.textContent = "Artista: " + disco.artista;

    const pais = document.createElement("p");
    pais.textContent = "País: " + disco.pais;

    const anio = document.createElement("p");
    anio.textContent = "Año: " + disco.publicacion;

    const copias = document.createElement("p");
    copias.textContent = "Copias vendidas: " + disco.copias + " mil";

    const precio = document.createElement("p");
    precio.textContent = "Precio: " + Number(disco.precio).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
    });

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(artista);
    tarjeta.appendChild(pais);
    tarjeta.appendChild(anio);
    tarjeta.appendChild(copias);
    tarjeta.appendChild(precio);

    contenedor.appendChild(tarjeta);



});