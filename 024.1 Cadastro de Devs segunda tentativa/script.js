function createLabel(forHtml,text){
  const label = document.createElement('label')
  label.htmlFor = forHtml
  label.innerText = text
  return label
}

function createInput(nameI,idI,valueI,typeI='text'){
  const inputN = document.createElement('input')
  inputN.type = typeI
  inputN.name = nameI
  inputN.id = idI
  inputN.value = valueI
  return inputN
}

tecIndex=0

const ulTecs = document.querySelector('ul#ulTecs')
const name = document.querySelector('input#name').value

const insertNewTecnology = document.querySelector('button#insertNewTecnology')
insertNewTecnology.addEventListener('click',function(ev){

  ev.preventDefault()
  const newTec = document.createElement('li')
  newTec.id = 'newTec'+tecIndex

  labelTec = createLabel('tec'+tecIndex,'Tecnologia: ')
  textTec = createInput('tec'+tecIndex,'tec'+tecIndex,'')

  xp1label = createLabel('xp1'+tecIndex,'0 - 2 anos')
  xp1 = createInput('xp'+tecIndex, 'xp1'+tecIndex,'0-2anos','radio')
  xp1.setAttribute('checked','checked')

  xp2label = createLabel('xp2'+tecIndex,'2 - 5 anos')
  xp2 = createInput('xp'+tecIndex, 'xp2'+tecIndex,'2-5anos','radio')

  xp3label = createLabel('xp3'+tecIndex,'+ 5 anos')
  xp3 = createInput('xp'+tecIndex, 'xp3'+tecIndex,'+5anos','radio')

  const removeBtn = createInput('remove'+tecIndex,'remove'+tecIndex,'Remover','button')
  removeBtn.addEventListener('click',function(){
    ulTecs.removeChild(newTec)
  })




  newTec.append(labelTec, textTec, xp1, xp1label, xp2, xp2label, xp3, xp3label, removeBtn)
  ulTecs.append(newTec)
  tecIndex ++
})

const developers = []

const submitData = document.querySelector('input#submitData')
submitData.addEventListener('click',function(ev){
  ev.preventDefault()

  

  const developer = {
    nome:document.querySelector('input#name').value,
    tecnologias: [] 
  }

  const tecnologies = ulTecs.querySelectorAll('li')
  
  tecnologies.forEach(function(row){
    
    const tecnologia = row.querySelector('input[name^=tec]').value
    const experiencia = row.querySelector('input[name^=xp]:checked').value

    if (tecnologia && experiencia){
      developer.tecnologias.push({tecnologia,experiencia})
    }
    row.remove()

    
    
  })
  
  developers.push(developer)
  console.log(developers);
  document.querySelector('input#name').value = ''
  tecIndex=0

})

