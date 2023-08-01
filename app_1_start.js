//Lesson 1
// alert("hello")

//single line comment

/*
multi
line comment
*/

//works with and without ;

//log to the console
console.log('Hey Bitch')
console.log(123)
console.log(true)

//variables
var greeting = 'Hello'  //make a variable
console.log(greeting)

//arrays
console.log([1,2,3,4]); //array index / value
var myvalues = [1,2,3,4]
console.log(myvalues[0]) //indexing into array

//libraries
var myobjects = {a:1,b:2}
console.log(myobjects)
console.table(myobjects)  //display like a table in console

//error
console.error('Opgefok, mooi man')

//warning
console.warn('Watch out')

//clear
//console.clear();

//testing time for a script
console.time('Hello')
    console.log('Hello world')
    console.log('Hello world')
    console.log('Hello world')
    console.log('Hello world')
    console.log('Hello world')
console.timeEnd('Hello')

