type Cpf = string | number

function findPerson (cpf:Cpf) {
  if (typeof cpf === 'string'){
    return cpf.toLowerCase
 }
  return cpf.toFixed(2)
}

type Animal = {sex: 'male' | 'female'}
type Human = {hungre: boolean}


type Person = Animal & Human

function getPersonStatus (person: Person){
  return person.
}