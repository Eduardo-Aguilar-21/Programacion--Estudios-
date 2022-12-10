function medir(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var res;
    var m = " Es el numero mayor entre " + n1 + " y " + n2;

    if(n1 && n2 ){
        if(n1 > n2){
            res = '\"' + n1 + '\"' + m;
        } else if(n2 > n1){
            res = '\"' + n2 + '\"' + m;
        } else if(n1 = n2){
            res = "Ambos numeros son iguales";
        } else {
            res = "Usted a ingresado un valor que no es un numero";
            console.log("pendejo");
        }
    } else {
        res = "Alguno de los dos valores esta en blanco";
    }



    var mos = document.getElementById("mayor");
    mos.innerHTML = res;





}