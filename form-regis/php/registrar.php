<?php
include "cn.php";
//Recibe datos y almacena en variables
$id = $_POST["id"];
$fecha_expedicion = $_POST["fecha_expedicion"];
$nombre1 = $_POST["nombre1"];
$nombre2 = $_POST["nombre2"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$clave = $_POST["clave"];
//consulta de insertar
$insertar = "INSERT INTO usuarios(id, fecha_expedicion, nombre1, nombre2, apellido1, apellido2, telefono, email, clave) VALUES ('$id','$fecha_expedicion','$nombre1','$nombre2', '$apellido1', '$apellido2', '$telefono', '$email', '$clave')";

$verificar_id = mysqli_query($conexion, "SELECT * FROM usuarios WHERE id = '$id'");
if (mysqli_num_rows($verificar_id) > 0){
    echo    '<script>
                alert("El número de identificación ya está registrado");
                location.href="../regis.html"
            </script>';
    exit;
}

$verificar_email = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email = '$email'");
if (mysqli_num_rows($verificar_email) > 0){
    echo  '<script>
                alert("El correo ya está registrado");
                location.href="../regis.html"
            </script>';
    exit;
}


//Ejecutar
$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
    echo    '<script>
                alert("Error al registrarse");
                location.href="../regis.html"
            </script>';
}else{
    echo    '<script>
                alert("Usuario registrado exitosamente");
                location.href="../index.html"
            </script>';
}

//Cerrar conexion
mysqli_close($conexion);
