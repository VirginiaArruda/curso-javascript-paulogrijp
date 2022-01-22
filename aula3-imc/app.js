// declarar as variaveis;



const weigth = document.querySelector('#weigth')
const heigth = document.querySelector('#heigth')
const button = document.querySelector('#calc')
const result = document.querySelector('#result')
const status = document.querySelector('#status')



function imc() {
    
    const imcValue = Number(weigth.value) / (Number(heigth.value) * Number(heigth.value))
    result.textContent = imcValue.toFixed(2)
    // const imcRound = imcValue.toFixed(2)

    if (imcValue < 17) {
        status.textContent = 'Muito abaixo do peso'
        status.style.color = '#309746'
    } else if (imcValue >= 17 && imcValue <= 18.49) {
        status.textContent = 'Abaixo do peso'
        status.style.color = '#82C341'
    } else if (imcValue >= 18.5 && imcValue <= 24.99) {
        status.textContent = 'Peso normal'
        status.style.color = '#AACF43'
    } else if (imcValue >= 25 && imcValue <= 29.99) {
        status.textContent = 'Acima do peso'
        status.style.color = '#F9A143'
    } else if (imcValue >= 30 && imcValue <= 34.99) {
        status.textContent = 'Obesidade I'
        status.style.color = '#F47A3A'
    } else if (imcValue >= 35 && imcValue <= 39.99) {
        status.textContent = 'Obesidade II'
        status.style.color = '#D0372A'
    } else {
        status.textContent = 'Obesidade III (mórbida)'
        status.style.color = '#231F20'
    }

}
    

button.addEventListener('click', imc);

