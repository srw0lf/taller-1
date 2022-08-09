let dinero;
let marranito = 0;
let resp= true;
let cuenta=0;

while(resp==true){ 
dinero= prompt("Ingrese la cantidad a guardar");
 marranito= parseInt(marranito) + parseInt(dinero);
cuenta=cuenta+1;

resp=confirm("Desea continuar");
}
window.alert(`El dinero acumulado es ${marranito}`);
