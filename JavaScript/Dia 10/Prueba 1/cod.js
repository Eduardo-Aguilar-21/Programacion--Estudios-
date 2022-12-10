function dia(d){
    switch (d) {
        case 1:
            var x = "Lunes";
            break;
        case 2:
            var x = "Martes";
            break;
        case 3:
            var x = "Miercoles";
            break;
        case 4:
            var x = "Jueves";
            break;
        case 5:
            var x = "Viernes";
            break;
        case 6:
            var x = "Sabado";
            break;
        case 7:
            var x = "Domingo";
            break;
        default:
            var x = "Tas pendejo jasjasajsja xd "
            break;
    }

    alert("Escogiste " + x);
    var xd = document.getElementById("dia");
    xd.innerHTML = x + "!!!";

}