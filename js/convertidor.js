function convertir(){
    let num=parseInt(document.getElementById("num").value);
    let op=document.getElementById("opcion").value;
    let op2=document.getElementById("opcion2").value;
    if(op==1 && op2==2){
        let res=num1+num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`)
    }
    else if (op==2){
        let res=num1-num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}`)
    }
    else if (op==3){
        let res=num1*num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la multiplicacion es ${res}`)
    }
    else if (op==4){
        let res=num1/num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la divicion es ${res}`)
    }
}