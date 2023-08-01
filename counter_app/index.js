//initialise the count as 0

let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("seve-el");

function increment() {
    //console.log("clicked")
    count++
    countEL.textContent = count
}