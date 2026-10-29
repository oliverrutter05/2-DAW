<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $numeros = [-8, -3, -12, -1, -6];

        $mayor = $numeros[0];

        foreach ($numeros as $numero) {
            if($numero > $mayor) {
                $mayor = $numero;
            }
        }

        echo "El número más alto es: " . $mayor;

    ?>

</body>
</html>