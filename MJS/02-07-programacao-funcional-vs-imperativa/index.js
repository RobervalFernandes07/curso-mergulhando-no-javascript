var person = {
    age :17,
    name: 'Lucas'
}

//Função pura 
function getRemainingYearsToMajory(person){
    return 18 - person.age
}

//Função impura - gera efeitos colaterais
function increasePersonAge(person){
    person.age = person.age + 1;
}

//Chamou um método impuro
increasePersonAge(person)

var getRemainingYears = getRemainingYearsToMajory(person)
console.log(getRemainingYears)