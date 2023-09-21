const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export function keydown(ev){
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
    inputs.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    inputs.value = inputs.value.slice(0,-1)
  }
  if (ev.key === 'Enter'){
    calculate()
  }
}