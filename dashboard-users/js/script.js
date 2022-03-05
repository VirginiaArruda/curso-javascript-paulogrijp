async function fetchApiData() {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        const tabela = document.querySelector('#fill-table')

        tabela.innerHTML = '';
        tabela.innerHTML = `
            <tr>
                <th>FULLNAME</th>
                <th>PICTURE</th>
                <th>GENDER</th>
                <th>CITY</th>
                <th>AGE</th>
            </tr>
        `

        data.results.forEach((item) => {

            const trRow = document.createElement('tr')
            // trRow.innerHTML = `
            //     <td>${item.name.first} ${item.name.last}</td>
            //     <td><img src="${item.picture.thumbnail}"/></td>
            //     <td>${item.gender}</td>
            //     <td>${item.location.city}</td>
            //     <td>${item.registered.age}</td>
            // `

            const tdFullName = document.createElement('td')
            const tdPicture = document.createElement('td')
            const tdGender = document.createElement('td')
            const tdCity = document.createElement('td')
            const tdAge = document.createElement('td')
            const tdImg = document.createElement('img')

            
            trRow.setAttribute('id', item.email)
            tdFullName.textContent = `${item.name.first} ${item.name.last}`
            trRow.appendChild(tdFullName)
            tabela.appendChild(trRow)
            
                                  
            trRow.appendChild(tdPicture)            


            tdGender.textContent = item.gender
            trRow.appendChild(tdGender)

            tdCity.textContent = item.location.city
            trRow.appendChild(tdCity)

            tdAge.textContent = item.registered.age
            trRow.appendChild(tdAge)

            tdImg.setAttribute('src', item.picture.thumbnail)
            tdImg.textContent = item.picture.thumbnail
            tdPicture.appendChild(tdImg)

            tabela.appendChild(trRow)
        })

    })
}

window.onload = async () => {
    await fetchApiData()
}

const buttons = document.querySelectorAll('.page button')

buttons.forEach((button) => {
    button.addEventListener('click', async () => {
        
        buttons.forEach((btn) => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active')
            }
        })
       
        
        button.classList.add('active')
        fetchApiData()
    })
})


