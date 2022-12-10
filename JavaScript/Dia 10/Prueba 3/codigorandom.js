function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generar(){
    let elementos = document.getElementById("elementos");

    let opcionesgeneradas = "";
    for(let i = 0; i<10; i++){
        opcionesgeneradas += "<option>" + getRandomInt(1,100) + "</option>";
    }

    elementos.innerHTML = opcionesgeneradas;
}