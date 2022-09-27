let nombre = prompt("Digite su nombre");
let apellido = prompt("Digite su apellido");

console.log(`su nombre es ${nombre.toUpperCase(nombre)}`);
console.log(`la longitud de su nombre es ${nombre.length}`);
console.log(`la primera letra de su nombre es ${nombre.charAt(0)}`);

for (i=0; i<5;i++){
    console.log("hola")
}

let repetir=1;
while(repetir==1){
    console.log("hola soy dany");
    let repetir= prompt("para continuar digite 1 y 2 para salir");
}

do{
    console.log("hola soy daniel")
    repetir=confirm("desea continuar");
}while(repetir==true);
