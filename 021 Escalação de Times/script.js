function sendData(){
  let playersNameInput = document.querySelector('input#playersName')
  let playerPositionInput = document.querySelector('input#playerPosition')
  let playerShirtInput =document.querySelector('input#playerShirt')
  let scaledPlayers = document.querySelector('div#scaledPlayers > ul')

  function clearData(){
    playerPositionInput.value = ''
    playerShirtInput.value = ''
    playersNameInput.value = ''
  }
  
  if (playerPositionInput.value == '' || playerShirtInput.value == '' || playersNameInput == ''){
    alert('verifique os dados e tente novamente')
  }
  else{
    let li = document.createElement('li')
    li.id = 'camisa'+playerShirtInput.value
    li.innerHTML = `Escalado para a posição de ${playerPositionInput.value} joga ${playersNameInput.value}, camisa ${playerShirtInput.value} no time.`
    scaledPlayers.appendChild(li)
    clearData()
  }

}
function removePlayer(){
  let removePlayerinput = document.querySelector('input#removePlayer')
  let scaledPlayers = document.querySelector('div#scaledPlayers > ul')

  let liToRemove = document.querySelector('li#camisa'+removePlayerinput.value)

  scaledPlayers.removeChild(liToRemove)

}