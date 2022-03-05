function fetchApiData() {
    return fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .then(response => response.json())
    .then(data => {
        return data
    })
    
}

window.onload = async () => {
    const data = await fetchApiData()
    data.drinks.forEach((drink) => {

        const img = document.createElement('img')
        img.setAttribute('src', drink.strDrinkThumb)

        const description = document.createElement('p')
        description.innerText = drink.strDrink

        const button = document.createElement('button')
        button.setAttribute('id', drink.idDrink)
        button.appendChild(img)
        button.appendChild(description)

        const card = document.createElement('div')
        card.classList.add('card')
        card.appendChild(button)

        const cards = document.querySelector('.cards')
        cards.appendChild(card)
    })

    const buttons = document.querySelectorAll('.card button')
    buttons.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
            const drink =  await fetchApiById(event.path[1].id)

            const backButton = document.querySelector("#back")
            backButton.style.opacity = '1'

            const cards = document.querySelector(".cards")
            cards.innerHTML = ""

            const instruction = document.createElement('p')
            instruction.innerText = drink.strInstructions

            const title = document.createElement("h2")
            title.innerText = 'Preparo:'

            const preparation = document.createElement('div')
            preparation.classList.add('preparation')
            preparation.appendChild(title)
            preparation.appendChild(instruction)

            const mainTitle = document.createElement('h1')
            mainTitle.innerText = drink.strDrink

            const description = document.createElement('div')
            description.classList.add('description')
            description.appendChild(mainTitle)
            description.appendChild(preparation)

            const img = document.createElement('img')
            img.setAttribute('src', drink.strDrinkThumb)

            const main = document.querySelector('.main')
            main.appendChild(img)
            main.appendChild(description)
        }) 
    })
    
}
 
function fetchApiById(id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
        return data.drinks[0]
    })
}

const backButton = document.querySelector("#back")
backButton.addEventListener('click', () => {
    location.reload()
})






// function fetchApiData() {
//     return fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
//     .then(response => response.json())
//     .then(data => {
//         return data
//     })
// }



// window.onload = async () => {
//     const data = await fetchApiData()
    
//     data.drinks.forEach((drink) => {

//         const cardImg = document.createElement('img')
//         cardImg.setAttribute('src', drink.strDrinkThumb)

//         const cardDescription = document.createElement('p')
//         cardDescription.innerText = drink.strDrink

//         const button = document.createElement('button')
//         button.setAttribute('id', drink.idDrink)
//         button.appendChild(cardImg)
//         button.appendChild(cardDescription)

//         const card = document.createElement('div')
//         card.classList.add('card')
        
//         card.appendChild(button)
//         const cards = document.querySelector('.cards')
//         cards.appendChild(card)
               
//     }) 

// }

// //     const buttons = document.querySelectorAll('.card button')
// //     buttons.forEach((btn) => {
// //         btn.addEventListener('click', async (event) => {
                        
// //             const drink = await fetchApiById(event.path[1].id)
// //             console.log(drink)
// //         }) 

// //     })


// // }

// // function fetchApiById(id) {
// //     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
// //     .then(response => response.json())
// //     .then(data => {
// //         return data.drinks[0]
// //     })
// // }



// // criar uma função pra requisitar por id fora do window.onload;
//     //  colocar o id como paramentro;
//     //  passar o id no lugar correto da url;
//         // https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
//         // usar template literrals

// // chamar a função criada dentro do evento de click do card
//     // passar o id do botao para a função
//     // dar um consolelog na função criada
