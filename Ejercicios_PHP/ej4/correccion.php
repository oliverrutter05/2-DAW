<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado del examen</title>
</head>
<body>

    <h1>Resultado del examen</h1>

    <?php

        $correctas = [
            "p1" => "b",
            "p2" => "a",
            "p3" => "b",
            "p4" => "b",
            "p5" => "a",
            "p6" => "b",
            "p7" => "b",
            "p8" => "b",
            "p9" => "a",
            "p10" => "a"
        ];

        $aciertos = 0;

        for ($i = 1; $i <= 10; $i++) {

            $pregunta = "p" . $i;

            if (isset($_POST[$pregunta])) {

                if ($_POST[$pregunta] == $correctas[$pregunta]) {
                    $aciertos++;
                }

            }

        }

        $nota = $aciertos;

        echo "<h2>Has obtenido un $nota sobre 10</h2>";

        echo "<h3>Respuestas incorrectas:</h3>";

        for ($i = 1; $i <= 10; $i++) {

            $pregunta = "p" . $i;

            if (isset($_POST[$pregunta])) {

                if ($_POST[$pregunta] != $correctas[$pregunta]) {

                    echo "<p>Pregunta $i: La respuesta correcta es " . $correctas[$pregunta] . "</p>";

                }

            } else {

                echo "<p>Pregunta $i: No has respondido. La respuesta correcta es " . $correctas[$pregunta] . "</p>";

            }

        }

    ?>

</body>
</html>