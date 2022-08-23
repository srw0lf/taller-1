function palabra(){
    let nombre=(document.getElementById("nombre").value);
    let palabra=(document.getElementById("pal").value);
    let op=document.getElementById("opcion").value;

if(op==1){
    alert(`hola ${nombre}`);
    alert(`la longitud de ${palabra} es  ${palabra.length}`);
}
else if (op==2){
    alert(`hola ${nombre}`);
    alert(` ${palabra} en mayuscula es ${palabra.toUpperCase(palabra)}`);
}
else if (op==3){
    alert(`hola ${nombre}`);
    alert(` ${palabra} en minuscula es ${palabra.toLowerCase(palabra)}`);
}
else if (op==4){
    alert(`hola ${nombre}`);
    alert(`El primer caracter de ${palabra} es ${palabra.charAt(0)}`);
}
}