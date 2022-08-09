

let dinero;
let marranito = 0;
let resp= true;
let cuenta=0;
let juego;
let azar;

pos=prompt("ingresa el dinero a tu fondo");


while(resp==true){ 
azar=Math.floor(Math.random() * 2)+1;
console.log(`${azar} `);
juego=prompt("vamos a jugar al carisellaso asi que escoje cara o sello");
console.log( `${juego}`);
dinero= prompt("Ingrese la cantidad a apostar");


if(juego=="cara" && azar==1){ 
    console.log(`el resultado es cara usted gana`);
}
else if (juego=="cara" && azar==2){
    console.log(`el resultado es cara usted pierde`);
}
else if (juego=="sello" && azar==2){
    console.log(`el resultado es sello usted gana`);
}
else if (juego=="sello" && azar==1){
    console.log(`el resultado es sello usted pierde`);
}
else {
    console.log(`los datos no son validos`);
} 


cuenta=cuenta+1;

resp=confirm("Desea continuar");
}
window.alert(`El dinero acumulado es ${marranito}`);
