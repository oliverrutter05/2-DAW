<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $numero = $_POST["numero"];
        $color = $_POST["color"];

        echo "<h1> Tabla del $numero</h1>";

        echo "<table border='1'>";

        for($i = 1; $i <= 10; $i++) {
            $resultado = $numero * $i;

            echo "<tr>";
            echo "<td style='color: $color'>$numero x $i</td>";
            echo "<td style='color: $color'>$resultado</td>";
            echo "</tr>";
        }

        echo "</table>";

    ?>


</body>
</html>