/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


function fntReto7(){

    let strPalabra = 'Ismar'
    let arrPalabra = strPalabra.split('')
    let strPalabraInversa = ''

    for (i = (arrPalabra.length -1); i != -1; i--) { 
        strPalabraInversa += arrPalabra[i]
    }
    
    console.log(strPalabraInversa)
}

fntReto7();