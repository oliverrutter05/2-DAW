<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Imágenes</title>
</head>
<body>

    <h1>Imágenes ordenadas por tamaño</h1>

    <?php

        $imagen1 = $_FILES["imagen1"];
        $imagen2 = $_FILES["imagen2"];

        if (getimagesize($imagen1["tmp_name"]) && getimagesize($imagen2["tmp_name"])) {

            if ($imagen1["size"] <= $imagen2["size"]) {

                $primera = $imagen1;
                $segunda = $imagen2;

            } else {

                $primera = $imagen2;
                $segunda = $imagen1;

            }

            echo "<p>Primera imagen: " . $primera["name"] . "</p>";
            echo "<img src='" . $primera["tmp_name"] . "' width='300'>";

            echo "<p>Segunda imagen: " . $segunda["name"] . "</p>";
            echo "<img src='" . $segunda["tmp_name"] . "' width='300'>";

        } else {

            echo "<p>Uno de los archivos no es una imagen.</p>";

        }

    ?>

</body>
</html>