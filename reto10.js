/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const objLetras = {
    A: ' . - ',
    B: ' - . . . ',
    C: ' - . - . ',
    D: ' - . . ',
    E: ' . ',
    F: ' . . - . ',
    G: ' - - . ',
    H: ' . . . . ',
    I: ' . . ',
    J: ' . - - - ',
    K: ' - . - ',
    L: ' . - . . ',
    M: ' - - ',
    N: ' - . ',
    O: ' - - - ',
    P: ' . - - . ',
    Q: ' - - . - ',
    R: ' . - . ',
    S: ' . . . ',
    T: ' - ',
    U: ' . . - ',
    V: ' . . . - ',
    W: ' . - - ',
    X: ' - . . - ',
    Y: ' - . - - ',
    Z: ' - - . . ',
    1: ' . - - - - ',
    2: ' . . - - - ',
    3: ' . . . - - ',
    4: ' . . . . - ',
    5: ' . . . . . ',
    6: ' - . . . . ',
    7: ' - - . . . ',
    8: ' - - - . . ',
    9: ' - - - - . ',
    0: ' - - - - - ',
}

const objMorse = Object.fromEntries(
    Object.entries(objLetras).map(([key, value]) => [value.trim(), key])
)

function fntReto10(){
    let strPalabra = '123';
    let strMorse = '. -  - - ';

    let arrLetras = strPalabra.toUpperCase().split('')
    let arrMorse = strMorse.split('  ')

    for (let i in arrLetras){
        console.log(objLetras[i].trim(),i)
    }

    for (let j in arrMorse){
        console.log(objMorse[arrMorse[j].trim()],arrMorse[j])
    }
}

fntReto10(); 