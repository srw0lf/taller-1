let id =document.getElementById("features");
console.log(id);

console.log(document.querySelector("h1"));
//punto para clases
console.log(document.querySelector(".feature"));
//numeral para id
console.log(document.querySelector("#features"));
//asi accedemos cuando queremos ver todos los p
console.log(document.querySelectorAll("p"));
//asi accedemos cuando queremos ver el p en la posicion 1
console.log(document.querySelectorAll("p")[1]);
//recorriendo el nodelist
document.querySelectorAll("p").forEach((el)=>console.log(el))
//acceder a un atributo
console.log(document.querySelector("a").getAttribute("href"))
//cambiar el valor del atributo
document.querySelector("a").setAttribute("href","www.google.com")
//acceder a las propiedades de un css
const $mi=document.querySelector("#features");
$mi.style.setProperty("color","#FF0000");
$mi.style.setProperty("width","500px");
$mi.style.setProperty("background-color","black");


const $mic=document.querySelector(".miclase")
let text=`<p>
    essdfsdf
</p>
<p>
    sdfsdfsdz
    </p>`
$mic.textContent=text
$mic.innerHTML=text
const img=document.createElement("img");
img.src =
"https://www.trecebits.com/wp-content/uploads/2020/02/meme-kid.jpg"
document.body.appendChild(img);
const $caja=document.createElement("div")
$caja.innerHTML=`<img src="img/descarga.jpg">`
$mic.appendChild($caja);
//para remover $caja.remove();
