let ops =document.getElementById("ops");
const rta=document.getElementById("respuesta")

ops.addEventListener('click', (e)=>{
    e.preventDefault();
    let nombre=(document.getElementById("opcion1").value);
    let apellido=(document.getElementById("opcion2").value);
    let act=(document.getElementById("opcion2").value);
    

    if(nombre=="1" && apellido=="1" && act =="1"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
        rta.style.setProperty("");
    }
    else if (nombre=="2" && apellido=="2" && act =="2"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }
    else if (nombre=="3" && apellido=="3" && act =="3"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }
    else if (nombre=="4" && apellido=="4" && act =="4"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }
    else if (nombre=="5" && apellido=="5" && act =="5"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }

    else if (nombre=="6" && apellido=="6" && act =="6"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }
    else if (nombre=="7" && apellido=="7" && act =="7"){
        console.log(`es correcto`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>es correcto</p>`
        rta.innerHTML=texto
    
    }
    else{
        console.log(`es incorrecto`)
        let texto=`<p><img src="../img/11.png"></p>
        <p>es incorrecto</p>`
        rta.innerHTML=texto
    }
})