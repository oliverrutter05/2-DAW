<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

        $matriz = [
            [2, 4, 6],
            [1, 3, 5]
        ];

        function sumarFilas($matriz) {

            $suma = 0;
            $filas = [];

            foreach ($matriz as $fila) {

                foreach ($fila as $numero) {
                    $suma += $numero;
                }
                $filas[] = $suma;
            }

            return $filas;
        }

        $suma = sumarFilas($matriz);

        foreach ($matriz as $fila) {
            echo "Fila 1: " . sumarFilas($matriz);
        }

    ?>

</body>
</html>