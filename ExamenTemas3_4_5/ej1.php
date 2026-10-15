<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Calificar número</h1>

    <?php

        $numero = -8;

        if($numero < 0) {

            echo "<p>El número es negativo</p>";

        }
        elseif($numero > 0) {

            echo "<p>El número es positivo</p>";

        }
        else {

            echo "<p>El número es 0 :)";

        }



    ?>

</body>
</html>