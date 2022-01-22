const button = document.querySelector('#add-button')
const input = document.querySelector('#task-text')
const ul = document.querySelector('#list')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = input.value
    li.classList.add('task')
    ul.appendChild(li)
    input.value = ''

    li.addEventListener('click', () => {
        li.classList.toggle('completed')
    })

    li.addEventListener('dblclick', () => {
        li.remove()
    })

})




// criar variaveis button, input e ul
//  adicionar o evento no botao - evento click
// adicionar li na ul
    // criar li
    // inserir texto na li
    // adicionar li
    // zerar input


