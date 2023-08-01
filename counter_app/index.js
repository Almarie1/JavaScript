//initialise the count as 0

let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function increment() {
    //console.log("clicked")
    count++
    countEL.textContent = count
}

function save() {
    let countStr
    countStr = `${count} - `
    saveEL.textContent += countStr
    count = 0
    countEL.textContent = count
}