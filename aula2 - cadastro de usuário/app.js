// declarar s variáveis
// 



const name = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeat-password')
const agree = document.querySelector('#agree')
const registerBtn = document.querySelector('#register-btn')

function agreeValidation(checked) {
    if(!checked) {
        alert('É preciso concordar com os termos')
    }
} 

function emptyValidation(inputValue) {
    if(inputValue === '') {
        alert('Preencha os campos')
    }
}

function lengthValidation(inputValue, length) {
    if(inputValue.length < length) {
        alert(`Tem que ter pelo menos ${length} caracteres`)
    }
}

function equalPasswordValidation(passwordValue, confirmPassword) {
    if(passwordValue !== confirmPassword) {
        alert('As senhas são diferentes')
    }
}

function nameValidation() {
    emptyValidation(name.value)
    lengthValidation(name.value, 3)
}

function lastNameValidation() {
    emptyValidation(lastName.value)
    lengthValidation(lastName.value, 3)
}

function emailValidation() {
    emptyValidation(email.value)
}

function passwordValidation() {
    emptyValidation(password.value)
    lengthValidation(password.value, 6)
    equalPasswordValidation(password.value, repeatPassword.value)
}

registerBtn.addEventListener('click', (event) => {
    event.preventDefault()    
    nameValidation()
    lastNameValidation()
    emailValidation() 
    passwordValidation()
    agreeValidation(agree.checked)
})

