function convertir(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
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