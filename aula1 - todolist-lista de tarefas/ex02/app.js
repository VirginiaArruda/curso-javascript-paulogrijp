//declarar as variáveis - button e body
// criar evento no botão
// mudar a cor do body

const button = document.querySelector('#mudar-cor')
const body = document.body

button.addEventListener('click', () => {
    const color1 = Math.floor(Math.random()*256)
    const color2 = Math.floor(Math.random()*256)
    const color3 = Math.floor(Math.random()*256)

    body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
})