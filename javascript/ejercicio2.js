 // comparar 3 numeros 

 // que numero es mayor

 // si hay numeros repetidos  que imprima por consola, cual es el numero repetido */


 
 // Desarrollo del ejercicio 
 // 1. identificamos el mayor de cada  lista
 // 2. comparacion de listas 
 // 3. buscar la posicion de la lista de cada uno de los valores 
 // 4. comparar cada posicion 

// definimos la lista

let lista1 =[1,3,5,7,9];
let lista2 = [2,4,6,8,0];
numeroMayor=lista1[0]


for(let i=0; i<lista1.length; i++){
  if(lista1[i]>numeroMayor){
      numeroMayor = lista1[i];
  }

  console.log("numero mayor lista1:",numeroMayor);
}

for(let i=9; i<lista2.length; i++){
    if(lista2[j]>numeroMayor){
    numeroMayor = lista2[i];

    }
    
    console.log("numero mayor lista2",numeroMayor);
}
console.log(numeroMayor);