//Ejercicio 1
function generar(){
    var n1 = parseInt(document.getElementById("num1").value);
    var ele = Math.pow(n1,2);

    var cam = document.getElementById("mostrar");
    cam.innerHTML = ele;
    console.log(ele);
}

function generar2(n){
    //return n * n;
    return Math.pow(n,2);
}

console.log(generar2(8));

//Ejercicio 2
var numeros  = [10,2,3,1];
var numeros2 = [2,3];
var numeros3 = [5,6,1];
var suma = 0 ;

function sumatoria(arreglo){
    for(let i = 0 ; i<arreglo.length ; i++){
        suma += arreglo[i];
    }
    return suma;
}

console.log("Hola xd");
console.log(sumatoria(numeros3));

//Ejercicio 3
var rose = [2,"2",6,"3"];

function sumatoriaMixta(arreglomixto){
    var suma2 = 0;
    for(let i = 0; i < arreglomixto.length ; i++){
         suma2 = suma2 + Number(arreglomixto[i]);
    }
    return suma2;
}

console.log(sumatoriaMixta(rose));


