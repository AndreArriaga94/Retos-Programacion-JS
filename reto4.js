/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function fntReto4(){
    let intBusqueda = 100
    let flgPrimo = false
    let intCountDiv = 0

    for(i = 1; i <= intBusqueda; i++){
        for(j = 1; j <= i; j++){
            if((i % j ) == 0){
                intCountDiv++;    
            }
        }

        if(intCountDiv <= 2) {
            flgPrimo = true;
            console.log(i);
        }

        intCountDiv = 0;
    }
}

fntReto4();