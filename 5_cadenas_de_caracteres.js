/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

let cadenaDeCaracteres1 = 'abcdefghijklmnopqrstuvwxyz'
let cadenaDeCaracteres2 = 'Maria come un pan con su hermano Pedro'

//acceso a caracteres especificos
let caracter1 = cadenaDeCaracteres1.charAt(1)
console.log(caracter1);

let caracter26 = cadenaDeCaracteres1.charAt(20)
console.log(caracter26);

let caracter5 = cadenaDeCaracteres1[6]
console.log(caracter5);

let caracter8 = cadenaDeCaracteres2.charAt(8)
console.log(caracter8);

let caracter4 = cadenaDeCaracteres2.charAt(4)
console.log(caracter4);

let caracter16 = cadenaDeCaracteres2[16]
console.log(caracter16);

let caracter17  = cadenaDeCaracteres2[17]
console.log(caracter17);



// acceso a subcadenas
//metodo substring
let subcadena1 = cadenaDeCaracteres1.substring(7, 10)
console.log(subcadena1);

let subcadena2 = cadenaDeCaracteres1.substring(9, 19)
console.log(subcadena2);

let subcadena6 = cadenaDeCaracteres2.substring(6, 14)
console.log(subcadena6);


//metodo slice
let subcadena3 = cadenaDeCaracteres1.slice(0, 6)
console.log(subcadena3);

let subcadena4 = cadenaDeCaracteres2.slice(5, 20)
console.log(subcadena4);

let subcadena5 = cadenaDeCaracteres2.slice(8, 22)
console.log(subcadena5);



//longitud
let longitudDeCadena1 = cadenaDeCaracteres1.length
console.log(longitudDeCadena1);

let longitudDeCadena2 = cadenaDeCaracteres2.length
console.log(longitudDeCadena2);


// concatenacion
let string1 = 'hola'
let string2 = 'mundo'

let string3 = string1 + ' ' + string2
console.log(string3);

let string4 =  `${string1} ${string2}`
console.log(string4);

// repetición
let palabra = 'Happy '
let repeticion1 = palabra.repeat(3)
console.log(repeticion1);

// recorrido
//forEach
let recorrido = [1, 2, 3, 4]
let recorrido1 = recorrido.forEach((num)=> console.log(num)
);

const prices = [100, 200, 300]
let total = 0
prices.forEach(price => {
  total += price
})
console.log(total);

let users = [
  {name: 'Alice', active: false},
  {name: 'Bob', active: false},
  {name: 'Charlie', active: false}
];
console.log(users);

users.forEach(user =>{
  user.active = true // activa todos los usuarios
})
console.log(users);

const ages =[18, 21, 16, 30]

ages.forEach(age =>{
  if(age >= 18){
    console.log(`Es mayor de edad: ${age}`)
  } else {
    console.log(`Es menor de edad : ${age}`);
    
  }
})

//const buttons = document.querySelectorAll('button')

// buttons.forEach(button =>{
//   button.addEventListener('click', () =>{
//     alert('Botón clickeado')
//   })
// })

const data = [1, 2, 3, 4]
data.forEach(item =>{
  console.log(`Elemento : ${item}`);
  
})

const numbers = [5, 10, 15, 20]
let countAbove10 = 0
numbers.forEach(number =>{
  if(number > 10){
    countAbove10++
  }
})
console.log(`Numeros mayores a 10: ${countAbove10}`);

// map

let numbers1 = [1, 2, 3, 4, 5] 
let  dupilcateNumbers = numbers1.map( num => num *2)
console.log(dupilcateNumbers);

const usersMap = [
  {name:'Alice', age: 35},
  {name:'Bob', age: 25},
  {name:'Charlie', age: 45},
]
const nameMap = usersMap.map(user => user.name)
console.log(nameMap);

const userDescription = usersMap.map(user => `${user.name} is ${user.age} years old`)
console.log(userDescription);

let product = [
  {name: 'Laptop', price: 1000}, 
  {name: 'Mouse', price: 20},
]
const discountedProducts = product.map(product=> {
  return {...product, price: product.price *0.9} 
})
console.log(discountedProducts);

const stringNumbers = ['1', '2', '3', '89654123']
const convertedNumbers = stringNumbers.map( str =>Number(str))
console.log(convertedNumbers);
