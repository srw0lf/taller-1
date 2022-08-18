//declarar la funcion por declaracion
/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`el lanzamiento fue ${moneda}`);

}
//invoca la funcion
lanzarmoneda();
*/
//funcion con valor de retorno
function lanzarmoneda(){
    let moneda=Math.floor((Math.random()*2)+1);
    return moneda;
}
//invocar la funcion con valor de retorno
console.log(`el lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`lanzamiento fue ${lanzamiento}`);

//funcion con parametros
function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}
//invocar la funcion y enviar argumentos segun correspondan 
ganar (0,1000);
perder(0,1000);
//empezamos el juego con el usuario
let seguir =true;
let saldo=0;
let jugador=prompt("imgresar el nombre del jugador");
saldo=parseInt(prompt("cuanto deseas recargar para jugar"));
while(seguir==true){
    let eleccion=prompt(`${jugador} elige 1 para cara y 2 para sello`);
    let apuesta=parseInt(prompt(`de tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
    let lanzamiento= lanzarmoneda();
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo, apuesta);
        console.log(`el lanzamiento fue cara tu ganas el saldo es de ${saldo}`);
    }
    else if (lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo, apuesta);
        console.log(`el lanzamiento fue sello tu ganas el saldo es de ${saldo}`);
    }
    else if (lanzamiento==1 && eleccion==2){
        saldo=perder(saldo, apuesta);
        console.log(`el lanzamiento fue cara y escojiste sello, tu pierdes tu saldo actual es de ${saldo}`);
    }
    else if (lanzamiento==2 && eleccion==1){
        saldo=perder(saldo, apuesta);
        console.log(`el lanzamiento fue sello y escojiste cara, tu pierdes tu saldo actual es de ${saldo}`);
    }

}
//funcion con parametros
let lanzar=function lanzarmoneda(){
    let moneda =Math.floor((Math.random()*2)+1);
    return moneda;
}
//invocar la fubncion
let lanzami=lanzar();
//funcion con parametros
let ganar=function(saldo,apuesta){
    saldo=saldo+(apuesta);
    return saldo;
}
//invocar la funcion
ganar(1000,2);

