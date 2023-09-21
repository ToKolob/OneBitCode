function asyncSum(a,b){
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
      reject('arguments must be of type number')
    }else(
      resolve(a+b)
    )

    
  })
}
function asyncSubtraction(a,b){
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
      reject('arguments must be of type number')
    }else{
      resolve(a-b)
    }
    
  })
}

const sum = asyncSum(5, null)

const sub = asyncSubtraction(2,5)

Promise.all([sum,sub]).then(results=>console.log(results)).catch(err=>console.log(err))

