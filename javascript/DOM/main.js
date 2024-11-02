const titulo  = document.createElement ("h1")

titulo.textContent ="Hola soy Spiderman// texto creeado con javascript";
document.body.appendChild(titulo);


const boton= document.createElement("button");

boton.innerText="click";
boton.style = "background:red";
document.body.appendChild(boton);


boton.addEventListener("click" ,() => {
    document.body.innerHTML = `   
    <h1> te da la bievenida spiderman </h1>
    <button id='boton2'>click2</button>
    `;
}
);







/*

hacer un boton que diga peligro y otro que no diga no peligro
con evento 

con eventos DOM

const v1 = "tio ben ";

const v2 = "receurde lo siguiente";

const v3 = "un gran poder requiere una gran responsabilida";

const v4 = " ten cuidado con el duende verde";

let peligro = true



*/

     

