<?php
    $x = 2;
    $y = 4;
    $z = 6;

    $pos[0] = $x;
    $pos[1] = $y;
    $pos[2] = $z;
    $suma[3] = $x + $y;
    $multiplicacion[4] = $y * $z;
    $dividir[5] = $x/$z;
    $sumarTodo[6] = $x + $y + $z;
    $lio[7] = ($y+$z) / $x;
?>

<table Border="1" CellPadding='2' CellsPacing="2">
    <tr Align="center">
        <td> Posision 1 </td>
        <td> <?php echo $pos[0] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 1 </td>
        <td> <?php echo $pos[1] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 2 </td>
        <td> <?php echo $pos[2] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 3 </td>
        <td> <?php echo $suma[3] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 4 </td>
        <td> <?php echo $multiplicacion[4] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 5 </td>
        <td> <?php echo $dividir[5] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 6 </td>
        <td> <?php echo $sumarTodo[6] ?> </td>
    </tr>
    <tr Align="center">
        <td> Posision 7 </td>
        <td> <?php echo $lio[7] ?> </td>
    </tr>
</table>