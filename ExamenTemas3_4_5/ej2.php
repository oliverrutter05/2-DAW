<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Calcular importe</h1>

    <?php

        $importe = 120;
        $descuento = 10;
        $aplicarDescuento = 0;

        if($importe >= 100) {

            $aplicarDescuento = $importe * ($descuento / 100);

            echo "<p>Se aplica descuento, así que el importe total es: " . $aplicarDescuento . " €</P>";
        }
        else {

            echo "<p>No se aplica descuento. El importe total es: " . $importe . "</p>";
        }





    ?>

</body>
</html>