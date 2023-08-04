// Date and Time
let val

const today = new Date()//Instantaiting the date object - by default todays date
let birthday = new Date('14-11-1998')
birthday = new Date('14 November 1998 06:30:00')


val = today
// val = birthday
val = today.toString()
val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()

// Manipulate dates
birthday.setMonth(2)
birthday.setDate(12)
birthday.getFullYear(1998)
birthday.setHours(12)
birthday.setMinutes(30)
birthday.setSeconds(5)

console.log(val)
console.log(typeof val)