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
            $nota1 = [
                "Matemáticas" => 8,
                "Lengua" => 7,
                "Ingles" => 6,
                "Sociales" => 9
            ],

            $nota2 = [
                "Matemáticas" => 7,
                "Lengua" => 7,
                "Ingles" => 7,
                "Sociales" => 8
            ],

            $nota3 = [
                "Matemáticas" => 9,
                "Lengua" => 6,
                "Ingles" => 8,
                "Sociales" => 8
            ]
        ];

        function boletinNotas($nombre, $apellidos, $boletin) {

            echo "<p>Alumno: " . $nombre . ", " . $apellidos . "</p>";

            echo "<table border='1'>";

            echo "<tr>";
            echo "<th>Trimestre</th>";
            echo "<th>Matemáticas</th>";
            echo "<th>Lengua</th>";
            echo "<th>Inglés</th>";
            echo "<th>Sociales</th>";
            echo "<th>Media</th>";
            echo "</tr>";

            foreach ($boletin as $nota => $materia) {

                $media = array_sum($materia) / count($materia);
                
                echo "<tr>";
                echo "<td>" . ($nota + 1) . "</td>";
                echo "<td>" . $materia["Matemáticas"]. "</td>";
                echo "<td>" . $materia["Lengua"] . "</td>";
                echo "<td>" . $materia["Ingles"] . "</td>";
                echo "<td>" . $materia["Sociales"] . "</td>";
                echo "<td>" . number_format($media, 2) . "</td>";
                echo "</tr>"; 
            }

            echo "</table>";
            
        }

        boletinNotas("Oliver", "Rutter Franco", $boletin);


    ?>


</body>
</html>