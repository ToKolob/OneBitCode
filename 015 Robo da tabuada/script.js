let htNum = document.querySelector('input#htNum')

let htAnswer = document.querySelector('div#htAnswer')

htNum.addEventListener('input', calculate)

function calculate() {
  let num = Number(htNum.value)
  htAnswer.innerHTML = ''
  for (let index = 1; index < 21; index ++){
    htAnswer.innerHTML += `${num} x ${index} = calculando... ${index*num} <br>`
  }
  
}