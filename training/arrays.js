// Arrays

const numbers = [43,45,33,23,44,36,5]

const numbers2 = new Array(22,45,33,76,54) // using a constructor.

const fruit = ['Apple', 'Banana', 'Orange', 'Pear']

const mixed = [22, 'Hello', true, undefined, null, {a:1,b:1}, new Date()]

let val

// Get array length

val = numbers.length

// Check if it is an array

val = Array.isArray(numbers)

// Get single value

val = numbers[3]

val = numbers[0]

// Replace

numbers[2] = 100

val = numbers[2]

// Find index of value

val = numbers.indexOf(36)

// MUTATING VALUES

// Add value at the end of array

numbers.push(250)

// Add onto front

numbers.unshift(12)

// Take off from end

numbers.pop()

// Take off from the front

numbers.shift()

// Splice values

numbers.splice(1,1) // Gives first nuber and cuts the next 3 then carries on.

// Reverse

numbers.reverse()

// Concatenate Array

val = numbers.concat(numbers2)

// Sort Arrays

val = fruit.sort()

val = numbers.sort()

// Use the "compare function"

val = numbers.sort(function(x,y) {

    return x - y

})

// Reverse

val = numbers.sort(function(x,y) {

    return y - x

})

// Find

function under50(num) {

    return num < 50

}

 

function over50(num) {

    return num > 50

}

val = numbers.find(under50) // 44

val = numbers.find(over50) // 100

 

console.log(numbers)

console.log(val)