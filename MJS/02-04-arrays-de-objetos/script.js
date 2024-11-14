
// Variavel com [arrays e elementos]
//var list = ['Daniel', 'Rafaela', 'Caio']

var person1 = {nome: 'Daniel',  age: '22' }
var person2 = {nome: 'Rafaela', age: '25' }
var person3 = {nome: 'Caio', age: '30'}

//Arrays com tres objetos
var list = [person1,person2,person3]

// of list , esta injetando os valores dentro de var person.
for (var person of list){
    console.log(person)
    //console.log(person.name)
}