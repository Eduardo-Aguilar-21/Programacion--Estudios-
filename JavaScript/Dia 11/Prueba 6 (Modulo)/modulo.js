//Evaluar si el numero ingresado es par o no
var men = "";
function evaluarPar(n){
    if(n % 2 == 0){
        men = "Es par";
    }
    return men;
}

console.log("Evaluacion de par");
console.log(evaluarPar(2));

//Evaluar si el numero ingresado es inpar o no
var men2 = "";
function evaluarInpar(n){
    if(n % 2 == 1){
        men2 = "Es inpar";
    }
    return men2;
}

console.log("Evaluacion de inpar");
console.log(evaluarInpar(5));

//Evaluar si es par o no
var men3 = "";

function evaluar(n){
    if(n % 2 == 0){
        men3 = "Es par";
    } else if ( n % 2 == 1){
        men3 = "Es Impar";
    }  else {
        men3 = "Pibe que pusiste weon?";
    }
    return men3;
}

console.log("Evaluar si es par o impar");
console.log(evaluar(13));

//Con mensaje
xd = prompt("Hola");
console.log("el valor de",xd);
alert(evaluar(xd));