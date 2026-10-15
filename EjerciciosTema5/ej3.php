<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <style>

        .rojo{

            background-color: red;

        }

        .azul{

            background-color: blue;

        }

        .verde{

            background-color: green;

        }

    </style>

    <h1>Tabla de colores</h1>
    <p>(Usando "style" en HTML)</p>

    <?php

        function colores($clase1, $clase2, $clase3) {

            echo "<table border='1'>";

            echo "<tr class='$clase1'><td>Fila 1</td></tr>";
            echo "<tr class='$clase2'><td>Fila 2</td></tr>";
            echo "<tr class='$clase3'><td>Fila 3</td></tr>";


            echo "</table>";
        }

        colores("rojo", "azul", "verde");


    ?>

</body>
</html>