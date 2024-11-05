const titulo  = document.createElement ("h1")

titulo.textContent ="Hola soy Spiderman// texto creeado con javascript";
document.body.appendChild(titulo);


const boton= document.createElement("button");

boton.innerText="click";
boton.style = "background:pink";
document.body.appendChild(boton);


boton.addEventListener("click" ,() => {
    document.body.innerHTML = `   
    <h1> te da la bievenida spiderman </h1>
    <button id='boton2'>click2</button>
    `;
}
);





