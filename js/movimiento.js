const movPag=document.querySelector(".movPag");
const btn_adelante2=document.querySelector(".sigPag");

const btn_atras1=document.querySelector(".volver-pag1");
const btn_adelante3=document.querySelector(".adelante-pag3");
const btn_atras2=document.querySelector(".volver-pag2");
const btn_adelante4=document.querySelector(".adelante-pag4");
const btn_atras3=document.querySelector(".volver-pag3");
const btn_final=document.querySelector(".fin");





btn_adelante2.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
    num[cont-1].classList.add("active");
    progressCheck[cont-1].classList.add("active");
    cont +=1;

});

btn_adelante3.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";

});

btn_adelante4.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-75%";

});

btn_final.addEventListener("click",function(e){
    e.preventDefault();
    alert("Se ha registrado correctamente.");

});


btn_atras1.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";

});


btn_atras2.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";

});


btn_atras3.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";

});