const button = document.getElementById('register')
function register(ev){
  const divEv = ev.currentTarget.parentNode
  const userName = divEv.children.userName.value
  const password = divEv.children.password.value
  const confirmPassword = divEv.children.confirmPassword.value
  
  if (password == confirmPassword && userName){
    alert('Usuario '+userName+' Cadastrados com sucesso!' )
  }
  else if (password != confirmPassword){
    alert('As senhas não são iguais!')
  }
  else{
    alert('Verifique os dados e tente novamente.')
  }    
}

button.addEventListener('click',register)

const removeEvent = document.querySelector('button#removeEvent')
removeEvent.addEventListener('click',function(){
  button.removeEventListener('click',register)
  alert('Evento removido!')
})

button.addEventListener('mouseover',function(ev){
  
  console.log(ev.currentTarget);
})


