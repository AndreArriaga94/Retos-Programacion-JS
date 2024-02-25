/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function fntReto2(){

  let boolAnagrama = true;
  let boolLetraIn = false;
  /*let strPalabra1 = $('#txtPalabra1').val();
  let strPalabra2 = $('#txtPalabra2').val();*/
  let strPalabra1 = 'Pala';
  let strPalabra2 = 'Apla';

  let arrPalabras = [];
  arrPalabras[0] = []
  strPalabra1.toUpperCase().split('').map(function(key){
      let pair = {};
      pair.letra = key;
      pair.existe = false;
      arrPalabras[0].push(pair)
      
  });
  arrPalabras[1] = strPalabra2.toUpperCase().split('');

  //console.log(arrPalabras)

  if(arrPalabras[0].length == arrPalabras[1].length){
      //console.log('same length')
    for (i = 0; i < arrPalabras[0].length; i++) { 
      let objLetra = arrPalabras[0][i];
      boolLetraIn = false;
      for (j = 0; j < arrPalabras[1].length; j++) {
        if(objLetra.letra == arrPalabras[1][j] 
          && objLetra.existe  == false
          && boolLetraIn == false){
            arrPalabras[0][i].existe = true;
            boolLetraIn = true;     
          }
      }
    } 
  }   

  for (i = 0; i < arrPalabras[0].length; i++) { 
    let objLetra = arrPalabras[0][i];
    if(objLetra.existe == false){
      boolAnagrama = false;
    }
  }

  if(boolAnagrama){
    console.log('es anagrama')
  }
  else{
    console.log('no anagrama')
  }
}

fntReto2();