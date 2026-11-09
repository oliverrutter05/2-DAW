# GameVault — Catálogo de videojuegos

Proyecto de Desarrollo Web en Entorno Cliente (DWEC), Unidad 3. Aplicación web interactiva para consultar y analizar un catálogo de videojuegos mediante JavaScript y módulos ES6.

## Temática

Videojuegos. El catálogo incluye diez títulos de distintas categorías: Acción y aventura, Indie y plataformas, y Deportes.

Cada videojuego es un objeto con identificador único (`identificador`), nombre, categoría, precio entero, puntuación decimal, plataforma, desarrolladora e imagen.

## Estructura

```text
Proyecto_Videojuegos/
├── index.html
├── README.md
├── img/
├── styles/
│   └── styles.css
└── js/
    ├── app.js
    ├── datos.js
    └── funciones.js
```

## Funcionalidades

- Catálogo completo con tarjetas.
- Estadísticas: cantidad de juegos, precio medio y puntuación media.
- Top 5 mejor valorados y top 5 más económicos.
- Verificaciones de categorías y precios.
- Filtro por categoría.
- Selección de videojuegos premium (puntuación igual o superior a 9).
- Búsqueda por ID y por nombre, con posición en el catálogo.
- Análisis de propiedades y conversión de objetos.

## Métodos utilizados

`map()`, `sort()`, `some()`, `every()`, `filter()`, `find()`, `findIndex()`, `forEach()`, `Object.keys()`, `Object.entries()` y `Object.fromEntries()`.

Las funciones de `funciones.js` están exportadas y se importan desde `app.js`. Las funciones que ordenan o filtran no modifican el array original.

## Instalación y ejecución

1. Descomprime la carpeta del proyecto.
2. Abre la carpeta con Visual Studio Code.
3. Ejecuta `index.html` mediante una extensión de servidor local, por ejemplo **Live Server**. También puedes servir la carpeta con cualquier servidor HTTP local.
4. No abras el HTML directamente mediante `file://`, porque los módulos ES6 pueden estar bloqueados por el navegador.

No es necesario instalar dependencias ni ejecutar `npm install`.

## Tecnologías

- HTML5
- CSS3 (diseño responsive)
- JavaScript ES6 (módulos, arrays, objetos y DOM)

## Autor

Oliver — Proyecto DWEC, Unidad 3.
