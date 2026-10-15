<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Función de precio final</h1>


    <?php

        function precioFinal($precio) {

            $descuento = 10;
            $aplicarDescuento = 0;

            if($descuento < 0 || $descuento > 100 ) {
                
                echo "<p>No es posible</p>";

                if($precio <= 80) {

                    $descuento = 25;
                    $aplicarDescuento = $precio * ($descuento / 100);

                    echo "<p>Se ha aplicado un descuento de un " . $descuento . "%. Sale un total de " . $aplicarDescuento . " €</p>";
                }
                elseif($precio >= 100) {

                    $descuento = 10;
                    $aplicarDescuento = $precio * ($descuento / 100);

                    echo "<p>Se ha aplicado un descuento de un " . $descuento . "%. Sale un total de " . $aplicarDescuento . " €</p>";

                }
            }

            precioFinal($precio);

        }




    ?>


</body>
</html>