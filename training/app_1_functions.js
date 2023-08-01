// Function Declarations

//function with no arguments
//make function
function greet(){
    return 'Hello'  //best practice : return something in a function
}

//call function
console.log(greet())

//function with arguments
function greet2(firstName='John', lastName='Doe'){  //default values
    if(typeof lastName === 'undefined'){ 
        lastName = ' '  
    }
    return 'hello ' + firstName + ' ' + lastName
}

console.log(greet2())

//function expressions
const square = function(x=0){
    return x*x
}

console.log(square(8))

// Immediately invokable function expressions (IIFE's)
// functon you declare and run at the same time
// expression by putting it between parenthesis
 (function(name){
    console.log('Hello ' + name)
 })('Almarie')

// Property methods
// when a function is put inside a object it is called a method
const todo = {
    add: function(){                   //add method
        console.log('Add todo..')
    },
    edit: function(id){
        console.log('Edit a todo..' + id)
    }
}

todo.add()
todo.edit(22)

todo.delete = function(){        //add a new method
    console.log('Delete todo')
}

todo.delete()