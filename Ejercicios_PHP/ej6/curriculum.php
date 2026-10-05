<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $dni = $_POST["dni"];
        $email = $_POST["email"];

        $cv = $_FILES["cv"];

        if($cv["type"] != "application/pdf") {

            echo "<p>El curriculum debe estar en formato PDF</p>";
            echo "<a href='index.html'>Volver</a>";
            
        } elseif ($cv["size"] > 2 * 1024 * 1024) {

            echo "<p>El curriculum no puede superar los 2 MB</p>";
            echo "<a href='index.html'>Volver</a>";
        } else {
            move_uploaded_file($cv["tmp_name"], "cv/" . $dni . ".pdf");

            echo "<h1>Registro realizado correctamente</h1>";
            echo "<p>Nombre: $nombre $apellidos</p>";
            echo "<p>DNI: $dni</p>";
            echo "<p>Email: $email</p>";
            echo "<p>Curriculum Vitae guardado correctamente</p>";
        }



    ?>
</body>
</html>