//Invertir
var ne = [1,2,3,4];
console.log(ne.length);

function invertir(cad){
    var arregloinvertido = [];
    for(let i = cad.length - 1; i >= 0; i-- ){
        arregloinvertido.push(cad[i]);
    }
    return arregloinvertido;
}

console.log(invertir(ne));
console.log(ne);

//Optimizando

function invertir2(arr){
    return arr.reverse();
}

console.log("Separar");
console.log(invertir2(ne));
console.log(ne);

//Sumar tres arreglos
console.log("Ahora que ? ");

var arreglobidimensional = [[1,1,1],[1,1,1],[1,1,1]];

function smarrbi(arrbit){
    var sumaT = 0;
    for (let i = 0; i < arrbit.length; i++) {
        var arrhijo = arrbit[i];
        for (let i = 0; i < arrhijo.length; i++) {
            sumaT += arrhijo[i];
            
        }
    }

    return sumaT;
}

console.log(smarrbi(arreglobidimensional));
console.log(arreglobidimensional.length);