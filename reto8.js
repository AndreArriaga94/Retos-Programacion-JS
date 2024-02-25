/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function fntReto8(){

    let strFrase = 'pc audifonos! control, celular! celular pc, pc pc'
    console.log(strFrase)

    strFrase = strFrase.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¡¿?]/g, '')
    console.log(strFrase)

    let arrPalabras = []
    let boolFistTime = true

    strFrase.split(' ').map(function(key){
        let objPalabra = {};
        let boolExiste = true;
        objPalabra.palabra = key;
        objPalabra.cantidad = 1;

        if(boolFistTime){
            arrPalabras.push(objPalabra)
            boolFistTime = false
            boolExiste = false
        }
        else{
            for(i = 0; i < arrPalabras.length; i++){
                if (arrPalabras[i].palabra == key){
                    arrPalabras[i].cantidad++
                    boolExiste = false
                }
            }     
        }
        
        if(boolExiste){
            arrPalabras.push(objPalabra)
        }  

    });

    console.log(arrPalabras)
}

fntReto8();