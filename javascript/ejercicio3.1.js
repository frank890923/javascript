/*

realizar ejercicio de java script  con funcion flecha

 hay 3 vectores

 vi v2 v3 v4

 contiene 3 strings


si  la variable spiderman esta en peligro debe lanzar el mensaje 

" como decia el tio ben, ten cuidado con el duende verde"

si no esta en peligro escribir 

"como decia el tio ben, un gran poder requiere una gran responsabilidad"

realizar con funcion flecha


*/


// se define los vectores

const v1 = "tio ben ";

const v2 = "receurde lo siguiente";

const v3 = "un gran poder requiere una gran responsabilida";

const v4 = " ten cuidado con el duende verde";

let peligro = false;



// funcion flecha  para verificar el estado de spiderman

const spiderman = (peligro)=>{
    // comprabamos si  "spiderman esta en peligro"
if(peligro== true){
    return'como decia el ${v1} ${v2} ${v4}';
}else{
    
    return 'como deci el  ${v1} ${v3}';
}

};

let recordando = spiderman ( peligro);
console.log(recordando);


