// OBJECT LITERALS
const person = {
    firstName: 'Rainouw',
    lastName: 'Rabie',
    age: 25,
    email: 'rainouwrabie@gmail.com',
    hobbies: ['music', 'games', 'diy'],
    address: {
        city: 'Roodepoort',
        province: 'Gauteng',
    },
    getBirthYear: function(){
        return 1998
    }

}

let valid

// Mutating vak
val = person
// Get spesific
val = person.firstName //preffered Method
val = person['firstname']
val = person.age
val = person.hobbies
val = person.address.province
val = person.address['city']
val = person.getBirthYear

console.log(val)

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 25},
    {name: 'Joey', age: 69}
]

// Basics of looping
for(let i=0; i < people.length; i++){
    console.log(people[i].name)
}