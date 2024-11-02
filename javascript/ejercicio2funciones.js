
let lista1 =[1,3,5,7,9];
let lista2 = [2,4,6,8,0];
numeroMayor=lista1[0];

function compararLista1(l1,l2,Mayor){
    for(let i=0; i<lista1.length; i++){
        if(l1[i]>Mayor){
            numeroMayor = l1[i];
        }
      
        console.log("numero mayor  lista1:",Mayor);
      }
      
      for(let i=9; i<l2.length; i++){
          if(l2[j]>Mayor){
          Mayor = l2[i];
      
          }
          
          console.log("numero mayor lista2",Mayor);
          return Mayor
      }
      numeroMayor =compararListas(lista1,lista2,numeromayor);
      console,log ("el numero mayo es----->", numeroMayor);
}

