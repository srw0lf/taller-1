//Regla para nombre y apellido               ^[\a-zA-ZÁ-y\s]{1,40}$
//Regla para numdoc y num telefonos          ^\d{7,10}$

//Regla correo                               ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//regla password                             ^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$


const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //solo letras
    numeros:/^[0-9]{7,10}$/,//solo numeros
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//correo
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //password
}
const inputs={
    numdoc:false,
    nombre:false,
    apellido:false,
    correo:false,
    telefono:false,
    password:false
}
//acceder al formulario
let form= document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");
//Agregar listener de evento submit al formulario que se envia
form.addEventListener('submit', (e)=>{
    e.preventDefault(); //evitar que se envie el formulario para las validaciones
})

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-bomb');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
        inputs[grupo]=true;  
    }
    else{
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-bomb');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
        inputs[grupo]=false;  
 }
}

const validarCampos=(e)=>{
    console.log("se genero un evento sobre el input" +e.target.name);
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        case "pasaword":
            validarInput(reglas.password,e.target,e.target.name);
        break;
        default:
        alert("no se a recibido un evento sobre el input");
        break;
    }
}

campos.forEach((campo)=>{
    //cuando suelta latecla se ejecuta el evento
    campo.addEventListener("keyup",validarCampos);
    //detecta cuando da click por fuera
    campo.addEventListener("blur",validarCampos);
})
form.addEventListener('submit',e=>{
    e.preventDefault();
    const terminos=document.getElementById("terminos");
    if(inputs.numdoc && inputs.nombre && inputs.apellido && inputs.correo && inputs.telefono && inputs.password && terminos.checked){
    alert("el usuario a sido registrado");
    form.reset()
    document.querySelectorAll('.success').forEach(inono=>{
        icono.classList.remove('success')
    })
}
else{
    alert("el registro eta mal")
    document.querySelectorAll('.success').forEach(inono=>{
        icono.classList.remove('error')
    })
}
})