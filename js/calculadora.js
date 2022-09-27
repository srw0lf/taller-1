let btn= document.getElementById("button");
btn.addEventListener ('click', function calcular(){

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;

    if(op==1){
        let res=num1+num2;
        alert(`El numero 1 es (${num1}) y el numero 2 (${num2}) la suma es ${res}`)
    }
    else if (op==2){
        let res=num1-num2;
        alert(`El numero 1 es (${num1}) y el numero 2 (${num2}) la resta es ${res}`)
    }
    else if (op==3){
        let res=num1*num2;
        alert(`El numero 1 es (${num1}) y el numero 2 (${num2}) la multiplicacion es ${res}`)
    }
    else if (op==4){
        let res=num1/num2;
        alert(`El numero 1 es (${num1}) y el numero 2 (${num2}) la divicion es ${res}`)
    }
});
let ops =document.getElementById("ops");
const rta=document.getElementById("respuesta")
ops.addEventListener('click', (e)=>{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);

    if(e.target.id=="suma"){
        let res=num1+num2;
        console.log(`El numero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`)
        let texto=`<p><img src="../img/22.png"></p>
        <p>El numero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}</p>`
        rta.innerHTML=texto
    }
    else if (e.target.id=="resta"){
        let res=num1-num2;
        console.log(`El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}`)
        texto=`<p><img src="../img/11.png"></p>
        <p>El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}</p>`
        rta.innerHTML=texto;
    }
})