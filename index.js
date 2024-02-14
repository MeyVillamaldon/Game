function deseo(){

let opciones = [
    'Helado gratis',
    'Dia de aventura',
    'Ramen o Sushi',
    'Ir por Bubble-tea',
    'Pollito frito',
    'Ir al cine',
    'Mr joy',
    'Pista de bolos',
    'Fotos ramdon'
];
let cantidad = opciones.length;
let ramdon= opciones[Math.floor(Math.random()*cantidad)];

//llamo del html donde ira el txt
let cuponera =document.getElementById('cuponera');


cuponera.innerHTML=`
<p class="cuponera"><br> ${ramdon} </p> `
}
