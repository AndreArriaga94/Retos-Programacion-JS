/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

const fntReto16 = () => {
    const strFech1 = '10/07/1994'
    const strFech2 = '20/06/1994'

    arrFech1 = strFech1.split('/')
    arrFech2 = strFech2.split('/')

    boolFechDia = true
    boolFechMes = true
    boolFechAnio = true

    if(arrFech1[0]<arrFech2[0]){
        boolFechDia = true
    }
    else{
        boolFboolFechDiaech1 = false
    }

    if(arrFech1[1]<arrFech2[1]){
        boolFechMes = true
    }
    else{
        boolFechMes = false
    }

    if(arrFech1[2]<arrFech2[2]){
        boolFechAnio = true
    }
    else{
        boolFechAnio = false
    }

    if(boolFechAniov && boolFechMes && ){
        boolFech1Menor = true
    }
    else if(boolFechMes){
        boolFech1Menor = true
    }
    else if(boolFechDia){
        boolFech1Menor = true
    }


    if ( fntFechVal(strFech1) && fntFechVal(strFech2)){
        if(boolFech1Menor) {
            arrFechMenor = strFech1.split('/')
            arrFechMayor = strFech2.split('/')
        }
        else{
            arrFechMenor = strFech2.split('/')
            arrFechMayor = strFech1.split('/')
        }

        intAnios = arrFechMayor[2] - arrFechMenor[2]
        intMeses = arrFechMayor[1] - arrFechMenor[1]
        intDias = arrFechMayor[0] - arrFechMenor[0]

        intResultado = (intAnios * 365) + (intMeses * 30) + intDias

        return intResultado
    }
}


const fntFechVal = (strFech) => {
    let arrFech = strFech.split('/')
    let dias = arrFech[0]
    let meses = arrFech[1]
    let anios = arrFech[2]

    let boolValido = true

    if((meses > 12 && meses < 1) ||
        (dias > 31 && meses < 1) ||
        (anios < 1)){
            console.log('fecha invalida')
            boolValido = false
    }

    return boolValido
}

console.log(fntReto16())