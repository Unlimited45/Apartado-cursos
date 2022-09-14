function validar(){
    var id, fecha_expedicion, nombre1, nombre2, apellido1, apellido2, telefono, email, clave, expresion;
    id = document.getElementById("id").value;
    fecha_expedicion = document.getElementById("fecha_expedicion").value;
    nombre1 = document.getElementById("nombre1").value;
    nombre2 = document.getElementById("nombre2").value;
    apellido1 = document.getElementById("apellido1").value;
    apellido2 = document.getElementById("apellido2").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    clave= document.getElementById("clave").value;
    expresion = /\W+@\W+.+[a-z]/;

    if(id === "" || fecha_expedicion === "" || nombre1 === "" || nombre2 === "" || apellido1 === "" || apellido2 === "" || telefono === "" || email === "" || clave === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(id.legth>11){
        alert("El numero de identificacion es muy largo.")
        return false;
    }
    else if(nombre1.legth>30 || nombre2.legth>30){
        alert("Solo se aceptan 30 caracteres como máximo para los nombres.")
        return false;
    }
    else if(apellido1.legth>30 || apellido2.legth>30){
        alert("Solo se aceptan 30 caracteres como máximo para los apellidos.")
        return false;
    }
    else if(telefono.length>10){
        alert("Solo se aceptan 10 caracteres como máximo para el teléfono.")
        return false;
    }
    else if(email.length>100){
        alert("Solo se aceptan 100 caracteres como máximo para el correo electrónico.")
        return false;
    }
    else if (expresion.test(email)){
        alert("El correo electrónico ingresado, no es válido.")
    }
    else if(clave.legth>20){
        alert("Solo se aceptan 20 caracteres como máximo para la contraseña. ")
        return false;
    }
    else if(isNaN(id)){
        alert("La identificación ingresada, no es válida.")
        return false;
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado no es un número.")
        return false;
    }


}

