const txres = document.querySelector('div#res')
let spres = document.querySelector('span#res')
const crlist = document.createElement('select')
crlist.size = '10'
crlist.style.width = '200px'

const travelerName = prompt ('Nobre viajante, qual é seu nome?')

let listOfCityies = 0

function appendCity() {

  let knowNewCity = '1'

  while (knowNewCity != '2') {
    
    let txnewCity = prompt ('Qual cidade você conhece?')

    let crnewCity = document.createElement('option')
    crnewCity.textContent = txnewCity
    crlist.appendChild(crnewCity)
    txres.appendChild(crlist)
    listOfCityies ++

    spres.innerHTML = `O nobre viajante ${travelerName} conhece ${listOfCityies} cidades!`

    knowNewCity = prompt ('Você conheçe alguma nova cidade? (1)-Sim (2)-Não')


  }
}