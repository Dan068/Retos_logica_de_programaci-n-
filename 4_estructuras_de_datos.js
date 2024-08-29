/*
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por el lenguaje
-Utiliza operaciones de inserción, borrado, actualización y ordenación. 
*/

//ARRAY
let lista = [1, 2, 3, 4, 5]
console.log(lista)

//Inserción
lista.push(6)
lista.unshift(0)
console.log(lista);

//borrado
lista.pop()
console.log(lista);
lista.shift()
console.log(lista);

//Ordenación
lista.sort()

//OBJETOS
let persona = {
  nombre: 'Daniela',
  edad: 32,
}
//adición
persona.apellido= 'Perez'
persona.esEstudiante = true
console.log(persona);

//SET
let miSet = new Set()
//inserción
miSet.add('hola')
miSet.add(1)
miSet.add(true)
console.log(miSet);

miSet.delete(1)
console.log(miSet);



//STACKS
const stack1 = [0]
function addS(element){
  stack1.push(element)
}
addS(1)
addS(4)
addS(8)
console.log(stack1);

function deleteS(element){
  stack1.pop(element)
}

deleteS()
deleteS()
console.log(stack1);

//QUEUES
const queue1 = ['a']

function addQ(element){
  queue1.push(element)
}
function deleteQ(element){
  queue1.shift(element)
}
addQ('b')
addQ('c')
addQ('d')
console.log(queue1);

deleteQ()
deleteQ()
console.log(queue1);



