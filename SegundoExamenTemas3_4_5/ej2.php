<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $importe = 80;
        $descuento = 10;

        if($importe >= 100) {
            $aplicarDescuento = $importe * ($descuento / 100);
            $importeTotal = $importe - $aplicarDescuento;

            echo "Importe: " . $importe . "€, se aplica descuento.<br>";
            echo "Importe total: " . $importeTotal . "€";
        }
        else {
            echo "Importe: " . $importe . "€, no se aplica descuento.<br>";
            echo "Importe total: " . $importe . "€";
        }


    ?>

</body>
</html>