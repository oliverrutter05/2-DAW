<?php
    $mascota1 = "Tobi";

    $matriz['mascota'] = $mascota1;
    $matriz['familia'] = null;
    $matriz['raza'] = "Golden";
    $matriz['color'] = "Amarillo";
    $matriz['peso'] = 14;
    $matriz['altura'] = 0.5;
    $matriz['edad'] = 8;
?>

<table Border="1" CellPadding='2' CellsPacing="2">
    <tr Align="center">
        <td></td>
        <td>Mascota</td>
        <td>Familia</td>
        <td>Raza</td>
        <td>Color</td>
        <td>Peso en Kilogramos</td>
        <td>Altura en Metros</td>
        <td>Edad</td>
    </tr>
    <tr Align="center">
        <td>Primera mascota</td>
        <td><?php echo $matriz['mascota']?></td>
        <td><?php echo $matriz['familia']?></td>
        <td><?php echo $matriz['raza']?></td>
        <td><?php echo $matriz['color']?></td>
        <td><?php echo $matriz['peso']?></td>
        <td><?php echo $matriz['altura']?></td>
        <td><?php echo $matriz['edad']?></td>
</table>