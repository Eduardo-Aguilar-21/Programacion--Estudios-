var persona = {
    nombre: "Lyncan",
    apellido: "Huandermish",
    edad: 33
}

console.log(persona.edad);

persona.edad = 21;

console.log(persona.edad);

persona.genero = "Masculino";

console.log(persona);

delete persona.genero;
console.log(persona);

var audrey = {
    nombre: "Audrey",
    edad: 21
}

var james = {
    nombre: "James",
    edad: 24
}
var ian = {
    nombre: "Lyncam",
    edad: 33,
    hijo: audrey,
    hijo2: james
}


//Encadenar mas objetos

var suanter = {
    nombre: "Suanter",
    edad: 77,
    hijo: {
        nombre: "Laist",
        edad: 35,
        hijo: {
            nombre: "Wanderwais",
            edad: 16
        }
    }
}


console.log(suanter);