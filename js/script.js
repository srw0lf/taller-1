/*console.log("hola mundo");

let numero=25;

console.log("el numero es ",numero);
console.log(`El numero es ${numero}`);

let nombre="daniel";
console.log(`El nombre es ${nombre}`);

let Boolean ="true";
console.log(`${Boolean}`);

let res=numero+5;
console.log("El resultado es "+res);
console.log(`el resultado es ${res}`);
console.log(`el resultado es ${numero+5}`);
window.alert("aaaaaaaaaaaaaaaaaaaaaa");
window.confirm("estasa seguro");
let  estado=window.confirm("estasa seguro");
console.log(`La ventana arrojo ${estado}`);



----------------
similar a alert  pero captura un dato
let num1=prompt("digite el primer numero");
let res=numero+parseInt(num1);
console.log(`El resultado es ${res}`)
let num2=prompt("digite el segundo numero");
let su=parseInt(num1)+parseInt(num2);
console.log(`El resultado es ${su}`);

---------------------
condicionales
if(num1>num2){ 
    console.log(`El numero ${num1} es mayor`);
}
else if (num1<num2){
    console.log(`El numero ${num2} es mayor`);
}
else {
    console.log(`los numeros son iguales`);
}
------------------------------------
operador ternario
let nummayor=(num1>num2)
?"El numero mayor es el primero"
: "El numero mayor es el segundo"

console.log(nummayor);










-------------------------------------------
condicionales con condicion compuesta

let usuario=prompt("digite el usuario");
let password=prompt("digite la contraseña");

if (usuario=="daniel"&& password=="ingreso"){
    window.alert("bienvenido");
}
else if(usuario=="daniel" && password!="ingreso"){
    window.alert("alerta verifique su password");
}
else if(usuario!="daniel" && password=="ingreso"){
    window.alert("Alerta verifique su usuario");
}
else {
    window.alert("credenciales de acceso incorrectas");
}

*/
//condicional multiple

let num1=prompt("digite el primer numero");
let num2=prompt("digite el segundo numero");
let suma= parseInt(num1)+parseInt(num2);
let resta= parseInt(num1)-parseInt(num2);
let multiplica= parseInt(num1)*parseInt(num2);
let divide= parseInt(num1)/parseInt(num2);
let poten= parseInt(num1)**parseInt(num2);
let raiz= Math.sqrt(num1);
let opera=prompt("digite que operacion desea utilizar");
switch(opera){
    case 'sumar':
    console.log(`El resultado de la suma es ${suma}`);
    break;
        case 'restar':
        console.log(`El resultado de la resta es ${resta}`);
        break;
            case 'multiplicar':
            console.log(`El resultado de la multiplicacion es ${multiplica}`);
            break;
                case 'dividir':
                console.log(`El resultado de la divicion es ${divide.toFixed(2)}`);
                break;
                    case 'potencia':
                    console.log(`El resultado elevado a la potencia es ${poten.toFixed(2)}`);
                    break;
                        case 'raiz cuadrada':
                        console.log(`La Raiz cuadrada de ${num1} es ${raiz.toFixed(2)} `)
}

