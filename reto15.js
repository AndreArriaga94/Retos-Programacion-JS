/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

fntReto15 = () => {
    const intNumero = 154
    const intLenNum = intNumero.toString().length

    let arrNumero = intNumero.toString().split('')
    let intResultado = 0

    for (let i in arrNumero){
        intResultado += Math.pow(Number(arrNumero[i]),intLenNum)
    }

    return intResultado === intNumero ? true : false
}

console.log(fntReto15())