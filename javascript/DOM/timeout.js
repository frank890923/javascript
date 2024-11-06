const evaluar =()=>{
    const edad = prompt ("cual es su edad:")
    if(edad <18){
        alert("es menor de edad");

    }else{
        alert("es mayor de edad");
    }
}

setTimeout( evaluar, 2000);