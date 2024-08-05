//estos son ejemplos de tipo de operadores aritmeticos
// const suma = a + b;
// const resta  = a * b;
//multiplicacion
// division
// modulo
// exponente
// division entera

//estos son operadores de comparacion
// const asignacion = 'igual';
// const comparacion = [ a == 2];
// const asignacionEstricta = [ a === a];
// desigualdad =[ a != b]
// mayor que a > b
// menor que b < a
// mayor o igual a >= b
// menor o igual b =< a

//operadores logicos
// and &&
// or ||
// not !

//estas son estructuras de control
/*bucles for, while, do-while y estructuras if-else y switch*/
const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['manzana', 'uvas', 'platanos', 'piña', 'sandia'];

const pares = ()=>{
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            console.log('estoy en la posicion ' + array[i]);
            console.log( 'es cero');
        }; 
        if( numeros[i] === 2){
            console.log('soy un 2');
        };
    }
}

console.log(pares);

/*crea un programa que imprima todos los numeros comprendidos entre 10 y 55, pares y que no sean ni el 16 ni multiplos de 3*/

const numerosDelPrograma = [10, 11, 12, 13, 14, 15, 16, 17]
const programa = ()=>{
    let resul = []
    for ( let i = 0; i< numerosDelPrograma.length; i++){
        if( numerosDelPrograma[i] % 2 == 0 && numerosDelPrograma[i] !=16 && numerosDelPrograma[i] %3 !=0 ){
            console.log(numerosDelPrograma[i]);
            resul.push(numerosDelPrograma[i]);
      
    };
    return resul;
};
console.log()
}