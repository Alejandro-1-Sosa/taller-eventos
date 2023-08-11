let element = document.getElementById("sitio");
button = document.getElementById("boton");
element.addEventListener('click',myfunction);
 function myfunction(){
    myfunction.stopPropagation();
    alert("Hola!Soy el div"); 
 }

    