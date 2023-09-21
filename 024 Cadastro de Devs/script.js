const inh = document.querySelector('button#insertNewHability')
let cont = 0
const radiosSpan = document.querySelector('span#radiosSpan')
inh.addEventListener('click',function(ev){
  ev.preventDefault()
  
  cont ++
  const radios = document.createElement('p')
  radiosSpan.appendChild(radios)

  radios.innerHTML += '<hr>'
  //acrescentar o label para o nome
  let habilityLabel = document.createElement('label')
  habilityLabel.for = 'hability'
  habilityLabel.innerText = 'Tecnologia: '
  radios.appendChild(habilityLabel)
  //agora o input do nome da tecnologia
  let hability = document.createElement('input')
  hability.type = 'text'
  hability.name = 'hability'+cont
  hability.id = 'hability'+cont
  hability.autofocus
  radios.appendChild(hability)
  radios.innerHTML += '<br>'
  //agora vamos criar um radio para cada, com o mesmo nome


  const experience1 = document.createElement('input')
  experience1.type = 'radio'
  experience1.name = 'experience'+cont
  experience1.id = 'experience1'
  experience1.value = 'Até 2 anos'
  radios.appendChild(experience1)
  experience1.checked

  const experience1label = document.createElement('label')
  experience1label.id = 'forRadio'
  experience1label.for = 'experience1'
  experience1label.innerText = 'Até 2 anos'
  radios.appendChild(experience1label)

  //segundo radio  
  const experience2 = document.createElement('input')
  experience2.type = 'radio'
  experience2.name = 'experience'+cont
  experience2.id = 'experience2'
  experience2.value = '  De 2 a 5 anos'
  radios.appendChild(experience2)

  const experience2label = document.createElement('label')
  experience2label.id = 'forRadio'
  experience2label.for = 'experience2'
  experience2label.innerText = '  De 2 a 5 anos'
  radios.appendChild(experience2label)

  //terceiro radio  
  const experience3 = document.createElement('input')
  experience3.type = 'radio'
  experience3.name = 'experience'+cont
  experience3.id = 'experience3'
  experience3.value = '  Mais de 5 anos'
  radios.appendChild(experience3)

  const experience3label = document.createElement('label')
  experience3label.id = 'forRadio'
  experience3label.for = 'experience3'
  experience3label.innerText = '  Mais de 5 anos'
  radios.appendChild(experience3label)

  //botão para remover o elemento radio
  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'
  radios.appendChild(removeButton)
  removeButton.addEventListener('click',function(){
    this.parentNode.remove()

    radios.innerHTML +='<br>'
  })
})



const submitData = document.querySelector('input[name="submitData"]')
submitData.addEventListener('click',function(ev){

  ev.preventDefault()

  const paragraphsInsideSpan = radiosSpan.querySelectorAll('p')

  let mConfirm = ''

  const name = document.querySelector('input#name').value
  mConfirm += 'Nome: ' + name +'\n'

  for (let index = 1; index <= cont; index++) {
    
    if (paragraphsInsideSpan[index-1]){

      let hability = document.querySelector('input#hability'+index).value
      mConfirm += 'Tecnologia: ' + hability

      let experience = document.querySelector('input[name=experience'+index+']:checked').value
      mConfirm += ', experiência: ' + experience +'\n'
    }       
  }

  confirm('Deseja cadastrar os seguintes dados? \n' + mConfirm)
})

