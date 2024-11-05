


const v1 = "tio ben ";
const v2 = "receurde lo siguiente";
const v3 = "un gran poder requiere una gran responsabilida";
const v4 = " ten cuidado con el duende verde";




// funcion flecha  para verificar el estado de spiderman

const spiderman = (v1,v2,v3,v4,peligro)=>{
    // comprabamos si  "spiderman esta en peligro"
if(peligro== true){
    return'como decia el ${v1} ${v2} ${v4}';
}else{

    return 'como deci el  ${v1} ${v3}';
}

};

//let recordando = spiderman ( peligro);



//////////////////////////////////


const titulo  = document.createElement ("h1")

titulo.textContent ="Hola soy Spiderman// texto creeado con javascript";
document.body.appendChild(titulo);


const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText="Peligro";
boton2.innerText= "No peligro"

boton.style = "background:pink;";
boton2.style = "background:green";

document.body.appendChild(boton);
document.body.appendChild(boton2);

boton.addEventListener("click" ,() => {
    peligro= false;
    recordando = spiderman (peligro)
    document.body.innerHTML = `

    <h1>como decia el tio ben un gran poder conlleva una gran responsabilidad</h1>
    <button id='boton2'>click2</button>
    `;
}
);

boton2.addEventListener("click" ,() => {
    peligro= true;
    recordando = spiderman (peligro)
    document.body.innerHTML = `

    <h1>como decia el tio ben recuerda lo siguiente! ten cuidado con el duende verde</h1>
    <button id='boton2'>click2</button>
    `;
}
);


