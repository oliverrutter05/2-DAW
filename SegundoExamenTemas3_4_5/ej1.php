<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $numero = -8;

        if($numero < 0) {
            echo "El número " . $numero . " es negativo.";
        }
        elseif ($numero > 0) {
            echo "El número " . $numero . " es positivo.";

        }
        else {
            echo "El número es 0";
        }

    ?>
</body>
</html>