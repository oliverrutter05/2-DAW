<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar</title>
</head>
<body>
    
    <h1>Tabla de multiplicar</h1>

    <?php

        $numero = $_POST["numero"];
        
        echo "<table border='1'>";

        for($i = 1; $i <= 10; $i++) {
            $resultado = $numero * $i;

            echo "<tr>";
            echo "<td>$numero x $i</td>";
            echo "<td>$resultado</td>";
            echo "</tr>";
        }

        echo "</table>";
        
    ?>

</body>
</html>