const resultInput = document.querySelector('input#result')
export function calculateFromInputs() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  const result = eval(inputs.value)
  resultInput.value = result
  resultInput.classList.remove('error')  
}
