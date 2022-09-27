let canciones=['natural','demons','venom','blue skie', 'one pilots']
console.log(canciones[2]);
console.log(canciones.length);
console.log(canciones[canciones.length-1]);
canciones.push('cantata del diablo');
console.log(canciones);
canciones.forEach(function(elemento,index,array){
    console.log(`posicion ${index}, elemento ${elemento}`)
})
canciones.splice(1,3);
console.log(canciones)

let aprendices=['daniel','juan'];
let seguir=true
while(seguir==true)
{
    aprendices.push(prompt("ingrese aprendiz"))
    seguir=confirm("desea ingresar otro valor")
}
console.log(aprendices)
let filtro = aprendices.filter(aprendices=>aprendices=='daniel');
console.log(filtro)
console.log(aprendices.sort());


let aprendice=[
    {primernombre:"jose", primerapellido:"vargas"},
    {primernombre:"sara",primerapellido:"ospina"}
]
letnombrecompleto=aprendice.map(function(elemento,index,array){
    return`${el.primernombre} ${el.primerapellido}`
})

