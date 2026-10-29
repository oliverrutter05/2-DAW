<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $notas = [4, 7, 5, 3, 9, 6];

        $aprobados = 0;
        $suspensos = 0;

        foreach ($notas as $nota) {
            if($nota >= 5) {
                $aprobados++;
            }
            else {
                $suspensos++;
            }
        }

        echo "Aprobados: " . $aprobados . "<br>";
        echo "Suspensos: " . $suspensos;


    ?>

</body>
</html>