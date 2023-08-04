// Switches - validate conditions (basically 'n case stelling)

const colour = 'red'

switch(colour){
    case 'red':
        console.log('Colour is red')
        break                        //break is important, otherwise everything else after will execute
    case 'blue':
        console.log('Colour is blue')
        break
    default:
        console.log('Colour is not red or blue')
        break
}

let day 

switch(new Date().getDay()){
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wednesday'
        break
    case 4:
        day = 'Thursday'
        break
    case 5:
        day = 'Friday'
        break
    case 6:
        day = 'Saterday'
        break
}
console.log(`Today is ${day}`)  //back ticks