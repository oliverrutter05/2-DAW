<?php

    $datos = ["Granada" => 150000,
    "Madrid" => 3000000,
    "Barcelona" => 2879200,
    "Málaga" => 240000,
    "Sevilla" => 500000,
    "Valencia" => 1584600,
    "Tarragona" => 485210
    ];

    echo "<h1>Ciudades y población</h1>";

    echo "<table border='1'>";

    echo "<tr>";
    echo "<th>Ciudad</th>";
    echo "<th>Población</th>";
    echo "</tr>";

    foreach ($datos as $nombre_posicion => $contenido) {

        echo "<tr>";
        echo "<td>" . $nombre_posicion . "</td>";
        echo "<td>" . $contenido . "</td>";
        echo "</tr>";

    }

    echo "</table><br><br>";

    echo "<h1>Ciudades y población en orden alfabético</h1>";

    echo "<table border='1'>";

    echo "<tr>";
    echo "<th>Ciudad</th>";
    echo "<th>Población</th>";
    echo "</tr>";

    ksort($datos);

    foreach ($datos as $nombre_posicion => $contenido) {

        echo "<tr>";
        echo "<td>" . $nombre_posicion . "</td>";
        echo "<td>" . $contenido . "</td>";
        echo "</tr>";

    }

    echo"</table><br><br>";

    echo "<h1>Ciudades y población ordenado por cantidad de población</h1>";

    echo "<table border='1'";

    echo "<tr>";
    echo "<th>Ciudad</th>";
    echo "<th>Población</th>";
    echo "</tr>";

    asort($datos);

    foreach ($datos as $nombre_posicion => $contenido) {

        echo "<tr>";
        echo "<td>" . $nombre_posicion . "</td>";
        echo "<td>" . $contenido . "</td>";
        echo "</tr>";

    }

    echo "</table><br><br>";

    echo "Ciudad con menos población: " . array_key_first($datos) . "<br>";
    echo "Ciudad con más población: " . array_key_last($datos) . "";
    
?>