/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fntReto3(){
    let intSerieAnt = 0;
    let intSerieSig = 1;
    let intSerieMostrar = 0;
    let i = 1;

    while(i <= 50){
        
        console.log(intSerieAnt);
        intSerieMostrar = intSerieAnt + intSerieSig;
        intSerieAnt = intSerieSig;
        intSerieSig = intSerieMostrar;
            
        i++;
    }
    
}

fntReto3()