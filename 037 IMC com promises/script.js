const weight = prompt('qual é sei é seu peso? ')
const height = prompt('qual a sua altura? ')



function imcTest(weight,height){
  return new Promise((resolve,reject)=>{   

    if (Number(weight) && Number(height)){
      const imc = Number(weight)/Number(height)**2     
      console.log(imc);   
      resolve (imc)
    } else {
      reject('os dados não correspondem')
    }  
  })
} 

imcTest(weight,height)
.then((resultado) => {
  if (resultado < 18.5){console.log('magreza');}
  else if (resultado < 25){console.log('normal');}
  else if (resultado < 30){console.log('sobrepeso');}
  else if (resultado < 40){console.log('Obesidade');}
  else {console.log('Obesidade grave');}
}).catch((resultado)=>{console.log(resultado);})