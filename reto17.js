/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const fntReto17 = () => {
    const arrMayus = []
    const strPalabra = 'Ismar'
    let strPalabraMayus = ''

    arrMayus['a'] = ['A']
    arrMayus['b'] = ['B']
    arrMayus['c'] = ['C']
    arrMayus['d'] = ['D']
    arrMayus['e'] = ['E']
    arrMayus['f'] = ['F']
    arrMayus['g'] = ['G']
    arrMayus['h'] = ['H']
    arrMayus['i'] = ['I']
    arrMayus['j'] = ['J']
    arrMayus['k'] = ['K']
    arrMayus['l'] = ['L']
    arrMayus['m'] = ['M']
    arrMayus['n'] = ['N']
    arrMayus['o'] = ['O']
    arrMayus['p'] = ['P']
    arrMayus['q'] = ['Q']
    arrMayus['r'] = ['R']
    arrMayus['s'] = ['S']
    arrMayus['t'] = ['T']
    arrMayus['u'] = ['U']
    arrMayus['v'] = ['V']
    arrMayus['w'] = ['W']
    arrMayus['x'] = ['X']
    arrMayus['y'] = ['Y']
    arrMayus['z'] = ['Z']

    for( let i in strPalabra) {
        console.log(strPalabra[i])
        strPalabraMayus += arrMayus[strPalabra[i]] !== undefined ? arrMayus[strPalabra[i]] : strPalabra[i]
    }

    console.log(strPalabraMayus)
}

fntReto17()