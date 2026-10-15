<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Contar aprobados y suspensos</h1>

    <?php

        $notas = [4, 7, 5, 3, 9, 6];

        foreach($notas as $nota) {

            if($nota >= 5 && $nota <= 10) {

                echo "<p>Aprobado: " . number_format($nota, 0, ", ", " ") . "</p>";
                
            }

            elseif($nota < 5 && $nota >= 0) {

                echo "<p>Suspenso: " . number_format($nota, 0, ", ", " ") . "</p>";

            }

            else {

                echo "<p>Eso directamente no es una nota</p>";

            }
        }




    ?>


</body>
</html>