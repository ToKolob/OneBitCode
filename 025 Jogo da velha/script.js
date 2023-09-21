const player1 = document.getElementById('playerName1')
const player2 = document.getElementById('playerName2')
const turnText = document.getElementById('playerTurn')
const bxlist = document.querySelectorAll('div#box')
const start = document.getElementById('start')
let playerTurn = 1
let player1boxs = []
let player2boxs = []
const selectedBoxs = []
const drawGame = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const winCombos = [
  ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'], // Linhas
  ['A', 'D', 'G'], ['B', 'E', 'H'], ['C', 'F', 'I'], // Colunas
  ['A', 'E', 'I'], ['C', 'E', 'G'] // Diagonais
]

function checkWin(){
  winCombos.forEach(function(combo){

    //azul ganha
    if (combo.every(cell => player1boxs.includes(cell))){
      document.documentElement.style.setProperty('--bg-color','#004')
      turnText.innerText = 'o jogador ' + player1.value + ' venceu a partida!'
      bxlist.forEach(function(bx){
        bx.style.backgroundColor = "#004"
        bx.classList.add('checked')
      })
      turnText.style.backgroundColor = '#004'
      playerTurn = 0

      player1.disabled = false
      player2.disabled = false
    }

    //vermelho ganha
    else if(combo.every(cell => player2boxs.includes(cell))){
      document.documentElement.style.setProperty('--bg-color','#400')
      turnText.innerText = 'o jogador ' + player2.value + ' venceu a partida!'
      bxlist.forEach(function(bx){
        bx.style.backgroundColor = "#400"
        bx.classList.add('checked')
      })
      turnText.style.backgroundColor = '#400'
      playerTurn = 0

      player1.disabled = false
      player2.disabled = false

    }
    //dar velha
    else if (drawGame.every(cell => (player1boxs.concat(player2boxs)).includes(cell))){
      turnText.innerText = 'deu velha'
      bxlist.forEach(bx => bx.style.backgroundColor = "#444")
      turnText.style.backgroundColor = '#444'
      player1.disabled = false
      player2.disabled = false
      return

    }
  })   
  
}

start.addEventListener('click',function(){
  bxlist.forEach(function(bx){
    bx.style.backgroundColor = '#bbb'
    bx.classList.remove('clicked')
  })
  //limpar celulas
  player1boxs = []
  player2boxs = []
  playerTurn = 1
  

  document.documentElement.style.setProperty('--bg-color','#bbb')
  player1.disabled = true
  player2.disabled = true

    
    turnText.innerText = "Turno do jogador " + player1.value
    turnText.style.backgroundColor = '#004'

    bxlist.forEach(function(bx,index){
      bx.data
      bx.addEventListener('click',function(){

        if(!bx.classList.contains('clicked')){
          bx.classList.add('clicked')
          if (playerTurn === 1){
            player1boxs.push(bx.dataset.letter)
            console.log(player1boxs);
            bx.style.backgroundColor = "#00a"
            playerTurn = 2
            turnText.innerText = "Turno do jogador " + player2.value
            turnText.style.backgroundColor = '#400'
            checkWin()
                    
          }
          else {
            player2boxs.push(bx.dataset.letter)
            console.log(player2boxs);
            bx.style.backgroundColor = "#a00"
            playerTurn = 1
            turnText.innerText = "Turno do jogador " + player1.value
            turnText.style.backgroundColor = '#004'   
            checkWin() 
          }
          
        }//else {          turnText.innerText = 'selecione outro quadrado!'        }        
      })
    })
})