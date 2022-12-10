function selec(va){
  switch (va) {
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
        var x = "Pendejo";
        break;
  }  

  alert("Has escogido " + x);

  var mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = x + "!!!!";

  console.log(mostrar);
}