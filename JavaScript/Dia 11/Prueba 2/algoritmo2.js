//Ejercicio Sumar unicamentre numeros powsitivos
var eslash = [1,-3,3,-5,3];

function positiv(arreglop){
    var suma = 0;
    for( let i = 0; i < arreglop.length; i++){
        if(arreglop[i] > 0 ){
            suma += arreglop [i];
        }
    }
    return suma;
}

console.log(positiv(eslash));

//Ejercicio Encontrar la cantidad de veces que se repite una palabra
console.log("Palabras");

var animales = [
    "perro",
    "gato",
    "loro", 
    "perro",
    "pez",
    "gato",
    "perro",
    "dragon",
    "conejo",
    "perro"
];

function repeat(lista,palabra){
    var contador = 0;
    for(let i = 0; i < lista.length; i++){
        if(lista[i]===palabra){
            contador++
        }
    }

    return "La palabra " + palabra + " se repite " + contador + " veces ";
}

console.log(repeat(animales,"perro"));

//Ejercicio remover espacios en una cadena
console.log("Remover");

var saludo = "h o l a m u n d o !";
var xd = "c a r a j o ! ! !";
function remover(texto){
    var resultado = "";
    for(let i = 0; i < texto.length; i++){
        if(texto[i] !== " " ){
            resultado += texto[i];
        }
    }
    return resultado;
}

console.log(remover(xd));

//Optimizando
console.log("Optimizando");

function remover2(cad){
    var result = cad.split(" ");
    return result.join("");
}

console.log(remover2(saludo));

//Optimizando mas aun
console.log("Mas aun");

function remover3(cadena){
    return cadena.split(" ").join("");
}

console.log(remover3(xd));