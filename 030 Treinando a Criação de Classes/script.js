//Variables

const registerBnt = document.querySelector('div.cadastro button').addEventListener('click',register)

const loginBnt = document.querySelector('div.login button').addEventListener('click',login)

const fullNameInput = document.querySelector("#fullName")
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const confirmPasswordInput = document.querySelector('#confirmPassword')
const loginEmailInput = document.querySelector('#loginEmail')
const loginPasswordInput = document.querySelector('#loginPassword')

const clients = []

//functions

function register(){
  // Verificar se o email já está cadastrado
  const existingClient = clients.find(client => client.email === emailInput.value);
  
  if (existingClient) {
    alert('Este email já está cadastrado.');
    return;
  }
  else if (fullNameInput.value == '' || emailInput.value == '' || passwordInput.value == '' || confirmPasswordInput.value == ''){
    alert('Verifique os dados e tente novamente')
    return    
  }
  else if (passwordInput.value !== confirmPasswordInput.value){
    alert('As senhas são diferentes')
    passwordInput.value = null
    confirmPasswordInput.value = null
    return
  }

  //adicionar cliente
  clients.push( new Client(fullNameInput.value,emailInput.value,passwordInput.value))
  
  console.log(clients); 
  alert('Cadastro feito com sucesso!')

  //limpar inputs
  fullNameInput.value = null
  emailInput.value = null
  passwordInput.value = null
  confirmPasswordInput.value = null  
}

function login() {
  const loginEmail = loginEmailInput.value;
  const loginPassword = loginPasswordInput.value;

  // Verificar se o cliente com o email existe
  const client = clients.find(client => client.email === loginEmail);

  if (!client) {
    alert('Email não encontrado.');
    return;
  }

  // Verificar se a senha corresponde
  if (client.password === loginPassword) {
    alert('Login bem-sucedido!');
  } else {
    alert('Senha incorreta.');
  }
}

//classes
class Client{
  constructor(fullName,email,password)
  {
    this.fullName = fullName
    this.email = email
    this.password = password
  }
  login(fullname,pin){
    if(fullname == this.fullName && pin == this.password){
      alert("login bem-sucedido!")
    }
  }
}

//test







