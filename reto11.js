/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function fntReto11(){

    let strCadena = '{ [ a * ( c + d ) ] - 5 }'

    // let arrSimbolos = strCadena.split('')

    let arrCadena = strCadena.split('')

    let arrExpresionAbrir = []
    
    let arrExpresionCerrar = []

    let strAbrir

    let boolBalanceada = true

    for (let i in arrCadena){
        // console.log(arrCadena[i])

        if(arrCadena[i] == '{'
            || arrCadena[i] == '['
            || arrCadena[i] == '('
        ){

            arrExpresionAbrir.push(arrCadena[i])

        }

        if(arrCadena[i] == '}'
            || arrCadena[i] == ']'
            || arrCadena[i] == ')'
        ){

            arrExpresionCerrar.push(arrCadena[i])

        }
    }

    arrExpresionCerrar.reverse()

    for (let j in arrExpresionAbrir){
        strAbrir = arrExpresionAbrir[j]

        if(strAbrir == '{' && arrExpresionCerrar[j] != '}'){
            boolBalanceada = false    
        }
        if(strAbrir == '[' && arrExpresionCerrar[j] != ']'){
            boolBalanceada = false    
        }
        if(strAbrir == '(' && arrExpresionCerrar[j] != ')'){
            boolBalanceada = false    
        }

    }
    
    console.log(boolBalanceada)
}

fntReto11()