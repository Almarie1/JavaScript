// TYPE CONVERSION
let val

// Number to string
val = 5
val = String(5)
val = String(4+4)

// Bool to string
val = String(true)
// Date to string
val = String(new Date)
// Array to string
val = String([1,2,3,4])

// toString() method
val = (5).toString()
val = (true).toString()

// string to number
val = '5'
val = Number(val)
val = Number(true) //true = 1 / false = 0
val = Number(null) //null = 0
val = Number('Hello') //NaN - Not a Number
val = Number('100.35') 
val = parseInt('100.95') //same as floor
val = parseFloat('100.30').toFixed(3) //To fixed set decimal places for float values




console.log(val) 
console.log(typeof val)


// TYPE COHERSION
const val1 = String(5)
const val2 = 6
const sum = val1 + val2 //when adding string and number will concatenate



