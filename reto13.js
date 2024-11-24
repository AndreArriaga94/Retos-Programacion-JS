/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

const fntReto13 = () => {
    const strOracion = 'Ana lleva al oso la avellana'

    let strTextoLimpio = fntLimpiarTexto(strOracion)
    let strTextoLimpioInverso = strTextoLimpio.split('').reverse().join('')

    let boolPalindromo = true

    for(let i in strTextoLimpio){
        if(strTextoLimpio[i] !== strTextoLimpioInverso[i] ){
            boolPalindromo = false
        }
    }

    console.log(boolPalindromo)
}

const fntLimpiarTexto = (strTexto) => {
    strTextoLimpio = strTexto.replace(/[\s\W_]+/g, '');
    return strTextoLimpio.toUpperCase()
}

fntReto13()