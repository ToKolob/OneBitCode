function calculate() {
  txnameOffencive = document.querySelector('input#nameOffencive')
  txdamage = document.querySelector('input#damage')
  txnameDefencive = document.querySelector('inpu#nameDefencive')
  txhealthPoints = document.querySelector('input#healthPoints')
  txdefencivePoints = document.querySelector('input#defencivePoints')
  txhasShild = document.querySelector('select#hasShild')
  outPut = document.querySelector('div#outp')

  damage = Number(txdamage.value)
  healthPoints = Number(txhealthPoints.value)
  defencivePoints = Number(txdefencivePoints.value)

  if (txnameOffencive.value == '' || txnameDefencive == '' || damage == '' || healthPoints == '' || defencivePoints == '') {
  outPut.innerHTML = 'Insira todos os dados para calcular...'
  } else {

    //outPut.innerHTML = `No combate, ${txnameOffencive.value} ataca com tudo! e ${txnameDefencive.value}`

    if (damage <= defencivePoints) {
      outPut.innerHTML += ` defendeu! <br>Não teve dano...`

    } else if (txhasShild.value == 'yes') {
      inflictedDamage = (damage-defencivePoints)/2
      outPut.innerHTML += ` não defendeu! Mas o escudo amenizou o golpe. 
      <br>O dano causado foi de <strong>${inflictedDamage}</strong>!`

    } else {
      inflictedDamage = (damage-defencivePoints)
      outPut.innerHTML += ` não defendeu! 
      <br>O dano causado foi de <strong>${inflictedDamage}</strong> !`
    }

    if (inflictedDamage < healthPoints) {
      outPut.innerHTML += `<br>O defensor permanece com <strong>${healthPoints-inflictedDamage}</strong> pontos de vida`
    } else {
      outPut.innerHTML = 'Defensor veio a knockout!!!'
    }
  }
}