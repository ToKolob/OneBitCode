const btnInitilize = document.querySelector('button')
btnInitilize.addEventListener('click',initialize)
menu = '0'
opt = '0'
weight = '0'
textToShow = ''
let number = [50, 200, 100, 100, 150, 0,]
let numWeighted = [{'number': 50, 'weight':1}, {'number': 200, 'weight':1}, {'number': 100, 'weight':1}, {'number': 100, 'weight':1}, {'number': 150, 'weight':1}, {'number': 0, 'weight':10}]



function initialize(){
  do {
    menu = prompt('*** Menu ***\n1. Insert numbers\n2. Show numbers\n3. Erase Numbers \n4. Simple Averange\n5. Weighted Averange\n6. Median\n7. Mode\n9. Exit')
    switch (menu) {
      case '1':
        do {
          opt = prompt(('Please Insert a number or "f" to finish'))
          if (opt == 'f'){
            break
          }
          else{
            opt = Number(opt)
            if (isNaN(opt)){
              alert ('Invalid option')
            }
            else {
              number.push(opt)
              weight = prompt('Insert a weight for this number')
              weight = Number(weight)
              if (isNaN(weight)){
              alert ('Invalid option, weight "1" added')
              numWeighted.push({'number': opt, 'weight':1})
              }
              
              else {
                numWeighted.push({'number': opt, weight})
              }

            }
          }

          
        } while (opt !== 'f');
        
        break;
      case '2':
        textToShow = ''
        numWeighted.forEach(el => textToShow += 'Number: ' + el.number + ' weight: ' + el.weight + '\n'  )
        alert(textToShow)

        break;
      case '3':
        numWeighted = []
        number = []
        
        break;
      case '4':
        let simpleAverege = number.reduce((sum, n) => sum + n, 0)
        alert(`Simple Average: ${simpleAverege/number.length}`)

        
        break;
      case '5':
        let weightedAverange = numWeighted.reduce((sum, n) => sum + n.number*n.weight,0)
        alert(`Weighted averange: ${weightedAverange/numWeighted.reduce((sum,n) => sum + n.weight,0)}`)
        
        break;
      case '6':
        number.sort((a,b) => a - b)
        if ((number.length % 2) == 0 ){
          medianInterseptor = number.length/2
          const median = ((number[medianInterseptor])+(number[medianInterseptor-1]))/2
          alert(median)
        }
        break;
      case '7':
        modeList = number.map(n => [
          n,
          number.filter(m => n === m).length
        ])
        modeList.sort((a,b)=> b[1]-a[1])
        alert(modeList[0][0])
        break;
        
        
          
      default:
        alert('Unacepted value!')
        break;
    }
    
  } while (menu !== '9');



}