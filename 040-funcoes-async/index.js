const numbers = [10,2,3,12,38]

async function powerUp(n){
  if (typeof n !== 'number'){
    return Promise.reject('argumenst must be of type number')
  }
  return n*n
}

Promise.all(numbers.map(number=>powerUp(number))).then(n=>console.log(n)).catch(err=>console.log(err))