var mascotas = [
    {
        especie: "gato",
        nombre: "Mirash",
        genero: "Hembra",
        edad: "1 año"
    },
    {
        especie: "perro",
        nombre: "Negro",
        genero: "Macho",
        edad: "6 años"
    },
    {
        especie: "gato",
        nombre: "Marcela",
        genero: "Hembra",
        edad: "8 años   "
    }
]

function contarHembra(arr){
    contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].genero == "Hembra"){
            contador++;
        }
    }
    return "Hay " + contador + " Hembras";
}

console.log(contarHembra(mascotas));
console.log("CONTAR SEXO ESPECIFICO");

function contarSexoEspecifico(arr,sexo){
    var contador = 0;
    var men = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].genero == sexo){
            contador++;
        }
    }

    if(contador>1){
        men = "Hay " + contador + " " + sexo + "s";
    } else if(contador == 1){
        men = "Hay " + contador + " " + sexo;
    }   else if(contador == 0){
        men = "Hay 0 mascotas de ese sexo";
    } else{
        men = "Algo hiciste mal pibe";
    }

    return men;
}

console.log(contarSexoEspecifico(mascotas,"Hembra"));

//Agregar si tuvo crias
function crias(arr,sexo){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].genero == sexo){
            arr[i].cria = "Tuvo crias";
        }
        arr[i].castrado = true;
    }

    return arr;
}

console.log(crias(mascotas, "Hembra"));