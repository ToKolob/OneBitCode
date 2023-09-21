const regexEmail = /^[a-zA-Z0-9._+-]{2,}@+[a-zA-Z0-9._+-]{2,}\.[a-zA-Z0-9.]{2,}$/
const regexpassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-])[A-Za-z\d!@#$%^&*()_+]{8,}$/
const submitBtnN = document.querySelector('input#submit')


function emailValidation(email){
  return regexEmail.test(email)
}

function passwordValidation(password){
  return regexpassword.test(password)
}

function validate(event){
  event.preventDefault()
  const email = document.querySelector('input#email')
  const password = document.querySelector('input#password')
  try {
    if (emailValidation(email.value)) {
      console.log('email valido');
      console.log(email.value)
    }else{console.log('email, invalido');}

    if (passwordValidation(password.value)){
      console.log('senha valida');
      console.log(password.value);
      
    }else{console.log('senha, invalida');}
    
  } catch (error) {
    console.log(error);
    
  }
  email.value = ''
  password.value = ''
  
}


submitBtnN.addEventListener('click',validate)






