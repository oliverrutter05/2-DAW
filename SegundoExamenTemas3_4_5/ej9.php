<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $notas = [6, 8, 4, 10];

        function calcularMedia($notas) {

            $suma = 0;

            foreach ($notas as $nota) {
                $suma += $nota;
            }

            $media = $suma / count($notas);

            return $media;
        }

        echo "Media de las notas: " . calcularMedia($notas);

    ?>

</body>
</html>