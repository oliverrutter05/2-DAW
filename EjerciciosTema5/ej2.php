<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Tabla de colores</h1>
    
    <?php

        function colores($color1, $color2, $color3) {
            echo "<table boder='1'>";

            echo "<tr style='background-color:$color1;'><td>$color1</td></tr>";
            echo "<tr style='background-color:$color2;'><td>$color2</td></tr>";
            echo "<tr style='background-color:$color3;'><td>$color3</td></tr>";

            echo "</table>";

        }

        colores("red", "blue", "green");

    ?>


</body>
</html>