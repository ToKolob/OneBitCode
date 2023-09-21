function register(element){
  
  const userName = element.children.userName.value
  const password = element.children.password.value
  const confirmPassword = element.children.confirmPassword.value

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