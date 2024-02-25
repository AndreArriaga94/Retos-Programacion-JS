/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function fntReto10(){
    
    let intDecimal = 21
    let intBinario = ''

    let boolContinuar = true

    do{
        let intResiduo = intDecimal % 2
        intBinario += intResiduo.toString()        
        intDecimal = parseInt(intDecimal / 2)
        boolContinuar =  intDecimal > 0 ? true : false
    }while(boolContinuar)

    fntReto7(intBinario);

}

function fntReto7(strBinario){

    let strPalabra = strBinario
    let arrPalabra = strPalabra.split('')
    let strPalabraInversa = ''

    for (i = (arrPalabra.length -1); i != -1; i--) { 
        strPalabraInversa += arrPalabra[i]
    }
    
    console.log(strPalabraInversa)
}

fntReto10(); 