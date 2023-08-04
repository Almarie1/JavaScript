const name = 'john'
const age = '30'
const job = 'Web developer'
const city = 'Krugersdorp'
container = document.getElementById('mydiv')

let html

// with tempelate literals/string using back ticks

function hello(name){
    return 'hello' + name   
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>:${2+2}}</li>
        <li>${hello(name)}</li>
        <li>${'under 30'}</li>
    </ul>
    `
    container.innerHTML = html
