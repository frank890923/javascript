const precioOriginal = 1000
const porcentajeDeDescuento = 15







// declar la funcion 


function calcularporDescuento(){
    function calcularporDescuento(precioProducto,decuento){
        const resultadoDescuento = (precioProducto * descuento)/100;
        const precioConDescuento = precioProducto - resultadoDescuento;

        return  precioConDescuento;
    }
    const  preciofinal  = calcularporDescuento(precioOriginal,porcentajeDeDescuento)
    
    console.log(preciofinal);
} 