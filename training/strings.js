const firstName = 'Peter'
const lastName = 'Parker'
const age = 24
const str = 'Hello my name is Rainouw'
const tags = "Web, Development, Javascript, Front-end"

let val
//Concatenation
val = firstName + lastName

// Append - Add onto
val = 'Rainouw '
val += 'Rabie'

val = 'Hello my name is ' + firstName + 'and I am ' + age

// Escaping
// val =
// val =

// Length Property
val = firstName.length

// concat() Method
val = firstName.concat(' ',lastName)

// Change case

val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[0] //Zero index

// IndexOf() Method

val = firstName.indexOf('e')
val = firstName.indexOf('u') //If character is not there it will be -1
val = firstName.lastIndexOf('e') //first letter found from the back
// charAt() Method
val = firstName.charAt(2)
// Get last char - common formula
val = firstName.charAt(firstName.length-1)

// Substring
val = firstName.substring(0,4)

// slice() mainly used in arrays
val = firstName.slice(0,4)
val = firstName.slice(0-1)

// Split()
val = str.split(' ')
val = str.split(',')

// Replace()
val = str.replace('Rainouw', 'Peter')// Looks for first value/ Replaces second

// Includes()
val = str.includes('Hello')


console.log(val)