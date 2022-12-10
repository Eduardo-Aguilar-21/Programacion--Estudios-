var sof = 0;

function resta(){

    --sof;
    console.log(sof);
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = sof;
}

function suma(){
    sof++;
    console.log(sof);
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = sof
}

