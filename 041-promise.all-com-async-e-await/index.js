async function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds*1000);    
  })  
}


const numbers = [621,51,65,895,15,323]





async function execute() {
  const square = await Promise.all(numbers.map(async(number) => {
    await waitFor(2)
    return number*number
  }))
  console.log(square);
}


execute()