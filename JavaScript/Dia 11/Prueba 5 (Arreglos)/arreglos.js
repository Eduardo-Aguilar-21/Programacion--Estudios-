var personas = [
    {
        nombre: "Juan",
        edad: 19,
        genero: "Masculino"
    },
    {
        nombre: "Marco",
        edad: 21,
        genero: "Masculino"
    },
    {
        nombre: "Aurelio",
        edad: 22,
        genero: "Masculino"
    }
]

console.log(personas);

console.log(personas[1].nombre);

personas[0].nombre = "Eduardo";
console.log(personas[0]);
delete personas[0].edad;
