/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

const fntReto14 = (intNumero) => {
    let intResultado = fntFactorial(intNumero)
    console.log(intResultado)
}

const fntFactorial = (intNumero) =>{

    if (intNumero === 0 || intNumero === 1) {
        return 1;
    }

    return intNumero * fntFactorial (intNumero - 1)
}

fntReto14(10)