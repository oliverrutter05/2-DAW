<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        function precioFinal($precio, $descuento = 10) {

            $aplicarDescuento = $precio * ($descuento / 100);
            $restarPrecioPorDescuento = $precio - $aplicarDescuento;

            echo "Precio: " . $precio . "€<br>Descuento: " . $descuento . "%<br>Precio final: " . $restarPrecioPorDescuento . "€<br><br>";
        }

        echo precioFinal(100);
        echo precioFinal(80, 25);

    ?>

</body>
</html>