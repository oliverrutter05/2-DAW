/*Crear un script PHP que utilizando arrays guarde las notas de todo un grupo de
alumnos. En el curso hay 5 alumnos de los que se guardará su nombre (no es
necesario guardar apellidos) y cada alumno está matriculado de: matemáticas,
lengua, ciencias naturales y geografía. El documento PHP deberá mostrar una
tabla parecida a la siguiente:*/

/*a. Se pide hacer esto utilizando una tabla en la que cada fila tenga como
nombre el nombre del alumno y como columnas las notas de cada alumno.*/

/*b. En los arrays NO PUEDEN aparecer las notas medias, se calcularán en el
momento de mostrarlas*/

/*c. Además, suponer que el profesor ha pedido ver las notas de sólo uno de
los alumnos, meterá el nombre y se mostrarán las notas de dicho alumno.
(Meter uno de los nombres del array en una variable simple y suponer que
dicho nombre es el que ha tecleado el profesor)./

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>Tabla de notas</h1>


<?php

    $alumnos = [
        "Antonio" => [
            "Maemáticas" => 5,
            "Lengua" => 8.3,
            "Ciencias Naturales" => 9,
            "Geografía" => 7,
        ],
        
        "Ana" => [
            "Matemáticas" => 8,
            "Lengua" => 7,
            "Ciencias Naturales" => 4.5,
            "Geografía" => 9,
        ],
        
        "Benito" => [
            "Matemáticas" => 9,
            "Lengua" => 6.75,
            "Ciencias Natutales" => 9,
            "Geografía" => 3.1,
        ]
    ];


    echo "<table border='1'>";

        echo "<tr>";
        echo "<td>Alumnos</td>";
        echo "<td>Matemáticas</td>";
        echo "<td>Lengua</td>";
        echo "<td>Ciencias Naturales</td>";
        echo "<td>Geografía</td>";
        echo "<td>Media</td>";
        echo "</tr>";

        foreach ($alumnos as $nombre => $notas) {
                
            $media = array_sum($notas) / count($notas);

            echo "<tr>";
            echo "<td>$nombre</td>";

            foreach ($notas as $nota) {
                echo "<td>$nota</td>";
            }

            echo "<td>" . number_format($media, 3, ',', '') . "</td>";
            echo "</tr>";

            

        }
        echo "</table>";
?>
    <h1>Notas de un solo alumno</h1>

<?php
    $notasAlumno = "Ana";

    echo "<h3>Notas del alumno: $notasAlumno</h3>";

    if(isset($alumnos[$notasAlumno])) {

        $notas = $alumnos[$notasAlumno];

        echo "<table border'1' cellpadding='8'>";
        echo "<tr>";
        echo "<td>Matemáticas</td>";
        echo "<td>Lengua</td>";
        echo "<td>Ciencias Naturales</td>";
        echo "<td>Geografía</td>";
        echo "<td>Media</td>";
        echo "</tr>";

        $media = array_sum($notas) / count($notas);

        echo "<tr>";
        echo "<td>$notasAlumno</td>";

        foreach($notas as $nota) {
            echo "<td>$nota</td>";
        }

        echo "<td>" . number_format($media, 3, ',', '') . "</td>";
        echo "</tr>";
    }
    else {
        echo "<p>Alumno no encontrado</p>";
    }
?>



</body>
</html>