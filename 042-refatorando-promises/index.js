async function imc(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number'){
    return Promise.reject('argument must be of type number')
  }
  else{
    return weight/(height**2)
  }

  
}


async function showIMC(weight, height) {
  try {
    const result = await imc(weight, height)
    console.log(result);
    if (result < 18.5){
      console.log('magreza');
    }else if(result < 25){console.log('normal');}
    else if(result < 30){console.log('sobrepeso');}
    else if(result < 40){console.log('obesidade');}
    else {console.log('obesidade');}    
  } catch (error) {
    console.log(error);
    
  }

  
}
showIMC(65,1.65)