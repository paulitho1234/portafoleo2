


function cargarSueldos(array){
    for(var i=0;i<array.length;i++){
        array[i]=parseInt(prompt("Ingrese Sueldo"));
    }
}

function calcularGastos(pagos){
    var acu=0;
    for(var i=0;i<pagos.length;i++){
        acu+=pagos[i];
    }
    return acu;
}

function generarNumeros(){
    var dim=parseInt(prompt("Ingresa la dimencion"));
    var listaNum=new Array(dim);
    for(var i=0;i<listaNum.length;i++){
        listaNum[i]=parseInt(Math.random()*10);
    }
    document.write(listaNum.toString());
}