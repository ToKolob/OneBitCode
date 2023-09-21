function checkAge(age){
  return new Promise ((resolve, reject)=>{
    if (age){
      resolve(age>18)
    }
    else{
      reject(new Error ('age is required'))
    }    
  })
}

function getAge(birthday){
  return new Promise((resolve, reject) => {
    if (birthday){
      const birthdayYear = new Date (birthday).getFullYear()
      const currentYear = new Date ().getFullYear()

      resolve(currentYear-birthdayYear)
    }
    else {
      reject(new Error('A birthday is required'))
    }
    
  })
}

const lucas = getAge('06/04/1997').then(age => checkAge(age)).then(age=>age?console.log("maior de idade"):console.log('menor de idade')).catch(err=>console.log(err))
