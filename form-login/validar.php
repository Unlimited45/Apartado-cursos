<?php
$id=$_POST['id'];
$clave=$_POST['clave'];

//conexion base de datos
$conexion=mysqli_connect("localhost", "root", "", "unlimited_web");

$consulta="SELECT * FROM usuarios WHERE id= '$id' and clave='$clave'";

$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas>0){
    echo  '<script>
                alert("Inicio correctamente!.");
                location.href="../index.html"
            </script>';
    //header("location:index.html");
}
else{
    echo    '<script>
                alert("Error en la autentificación.");
                location.href="./login.html"
            </script>';
    }

mysqli_free_result($resultado);
mysqli_close($conexion);