<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Función para calcular la media</h1>

    <?php

        function calcularMedia() {

            $notas = [6, 8, 4, 10];
            $media = 0;

            foreach ($notas as $nota) {
                
                for($i = 0; $i <= $nota; $i++) {

                    $media += $nota;

                }

                return $media;
            }

            echo "<p>$media</p>";
        }

        calcularMedia();



    ?>


</body>
</html>