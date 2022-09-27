let opciones= document.getElementById("opciones");
let resp=document.getElementById("respuesta");
opciones.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target.id)
    if(e.target.id=="opcion1"){
        resp.innerHTML=`opcion incorrecta`;
        resp.classList.add("incorrecto");
        resp.style.setProperty("visibility","visible");
        resp.classList.remove("correcto");
        
    }
    else if(e.target.id=="opcion2"){
        resp.innerHTML=`opcion incorrecta`;
        resp.classList.add("incorrecto");
        resp.style.setProperty("visibility","visible");
        resp.classList.remove("correcto");
    }
    else if(e.target.id=="opcion3"){
        resp.innerHTML=`opcion correcta`;
        resp.classList.add("correcto");
        resp.style.setProperty("visibility","visible");
        resp.classList.remove("incorrecto");
    }
    else if(e.target.id=="opcion4"){
        resp.innerHTML=`opcion incorrecta`;
        resp.classList.add("incorrecto");
        resp.style.setProperty("visibility","visible");
        resp.classList.remove("correcto");
    }
})