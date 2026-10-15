<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Boletín de notas</h1>

    <?php

        $boletin = [
            "Matemáticas" => "Sobresaliente",
            "Lengua" => "Notable",
            "Historia" => "Notable",
            "Dibujo" => "Insuficiente"
        ];

        function boletinNotas($nombre, $boletin) {

            echo "<table border='1'>";

            echo "<tr>";
            echo "<td>Alumno</td>";
            echo "<td>$nombre</td>";
            echo "</tr>";

            foreach ($boletin as $asignatura => $nota) {
                
                echo "<tr>";
                echo "<td>$asignatura</td>";
                echo "<td>$nota</td>";
                echo "</tr>";
            }

            echo "</table>";

        };

        boletinNotas("Juan Ramírez", $boletin);

        


    ?>


</body>
</html>