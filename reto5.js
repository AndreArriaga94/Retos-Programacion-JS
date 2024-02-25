/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/* 
* Triangulo = 1/2 * base * altura
* Cuadrado = lado * lado || lado ^ 2
* Rectangulo = base * altura
*/

let objPoligonoT = {};
objPoligonoT.tipo = 'triangulo';
objPoligonoT.base = 5;
objPoligonoT.altura = 3;

let objPoligonoC = {};
objPoligonoC.tipo = 'cuadrado';
objPoligonoC.base = 2;
objPoligonoC.altura = 2;

let objPoligonoR = {};
objPoligonoR.tipo = 'rectangulo';
objPoligonoR.base = 3;
objPoligonoR.altura = 2;



function fntReto5(objPoligono){
    const fntArea = {
        'triangulo': 0.5 * objPoligono.base * objPoligono.altura ,
        'cuadrado': objPoligono.base ** 2,
        'rectangulo': objPoligono.base * objPoligono.altura ,
    };

    console.log(fntArea[objPoligono.tipo] + " Es la base de un " + objPoligono.tipo);
}

fntReto5(objPoligonoT);
fntReto5(objPoligonoC);
fntReto5(objPoligonoR);