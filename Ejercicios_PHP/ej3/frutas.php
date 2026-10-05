<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Frutas seleccionadas</title>
</head>
<body>

    <h1>Frutas seleccionadas</h1>

    <?php

        $frutas = $_POST["frutas"];

        foreach ($frutas as $fruta) {
            echo "<p>$fruta</p>";
        }

    ?>

</body>
</html>