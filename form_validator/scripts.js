const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input, ){
    const formControl = input.parentElement.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function isValidEmail(email){
    const re = ^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$

    return re.test(string(email.toLowerCase()))
}

form.addEventListener('submit', function(e){
    console.log('submit')
    e.preventDefault()
    console.log(username.value)

    if(username.value === '') {
       showError(username, 'Username is required')
    }
    else {
        showSuccess(username)
    }
    if(email.value === '') {
       showError(username, 'email is required')
    }
    else if (!isValidEmail(email.value){
        showError(email, 'email is not valid')
    }
    else {
        showSuccess(email)
    }
    if(password.value === '') {
        showError(password, 'password is required')
    }
    else {
        showSuccess(password)
    }
    if(password2.value === '') {
        showError(password2, 'password is required')
    }
    else {
        showSuccess(password2)
    }
    if (password.value !== password2.value)
        showError('passwords do not match')
        if (password2.value !== password1.value)
        showError('passwords do not match')


})