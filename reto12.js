/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function fntReto12(){
    let str1,str2,out1 = out2 = ''
    let arrStr1, arrStr2 = []
    let boolExiste1, boolExiste2 = false

    str1 = 'aeio'
    str2 = 'au'

    arrStr1 = str1.split('')
    arrStr2 = str2.split('')

    for (let i in arrStr1){
        
        for (let j in arrStr2){
            if(arrStr2[j] == arrStr1[i]){
                boolExiste1 = true
            }
        }

        if(!boolExiste1){
            out1 += ' ' + arrStr1[i]
        }

        boolExiste1 = false
    }

    for (let k in arrStr2){
        
        for (let l in arrStr1){
            if(arrStr2[k] == arrStr1[l]){
                boolExiste2 = true
            }
        }

        if(!boolExiste2){
            out2 = ' ' + arrStr2[k]
        }

        boolExiste2 = false
    }

    console.log(out1)
    console.log(out2)
}

fntReto12()