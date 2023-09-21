function startQueueOfPatients() {
  const nameOfPatients = ['Miguel','Gael',"Arthur",'Helena','Alice','Heitor',598,'Theo','Laura','Davi','Samuel']

  let callingNext = '1'

  while (callingNext != '3'){
    let queuePosition =''

    for (n = 0; n < nameOfPatients.length; n++) {
      queuePosition += `\n${n+1} - ${nameOfPatients[n]}`

      if (n == 0){
        queuePosition += ' - Próximo'
      }else if (n==nameOfPatients.length-1){
        queuePosition += ' - Ultimo da fila'
      }    
    }
    alert(queuePosition)
    callingNext = prompt ('Menu \n(1) - Chamar o próximo \n(2) - Novo paciente \n(3) - Sair do sistema')

    if (callingNext == '1') {
      //chamar proximo
      let nextPatient = nameOfPatients.shift()
      alert ('Chamando paciênte ' + nextPatient)
    }
    else if (callingNext == '2'){
      //Acrescentando cliente
      let newPatient = prompt('Qual o nome do novo paciênte?')
      let numOfPatients = nameOfPatients.push(newPatient)
      alert (numOfPatients + ' na fila.')
    }
  }  
}

function startDeckOfCards() {

  const deckOfCards = ['As',2,3,4,5,6,7,8,9,10,'Jockey','Quen','King']

  //busquei uma função para embaraçlhar o baralho
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //fiz uma copia para não estragar a referencia das cartas
  const shuffledDeck = deckOfCards.slice()

  shuffleArray(shuffledDeck)

  keepPlaying = '0'

  while (keepPlaying != '3'){
    alert (shuffledDeck)

    keepPlaying = prompt('Menu\n 1 - Puxar carta\n 2 - Depositar nova carta \n 3 - Sair')

    if (keepPlaying == '1'){
      //puxar carta
      shuffleArray(shuffledDeck)
      alert('A carta tirada foi ' + shuffledDeck.pop())
    }
    else if (keepPlaying == '2'){
      //por carta do monte
      shuffleArray(deckOfCards)
      let newCard = deckOfCards.slice(0,1)
      shuffledDeck.push(newCard)

      alert('A carta adicionada foi ' + newCard) 
    }    
  }  
}