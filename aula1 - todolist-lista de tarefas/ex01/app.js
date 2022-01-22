const nameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#last-name')
const button = document.querySelector('#adicionar') 
const list = document.querySelector('#list')

function fullName(name, lastName) {
    return `${name} ${lastName}` 
}

button.addEventListener('click', () => {
     const li = document.createElement('li')
     li.textContent = fullName(nameInput.value, lastNameInput.value)
     list.appendChild(li)
     nameInput.value = ''
     lastNameInput.value = ''
})

// Criar uma li
// nomear a li
// adicionar li a ul
// zerar o input
