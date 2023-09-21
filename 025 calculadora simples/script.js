
const inputs = document.querySelector('input')
const resultInput = document.querySelector('input#result')



document.querySelectorAll('.numKey').forEach(function(btn){
  btn.addEventListener('click',function(){
    const value = btn.dataset.value
    inputs.value += value
  })
})

document.getElementById('clear').addEventListener('click', function(){
  inputs.value = ''
  inputs.focus()
})

import { keydown } from "../025 Jogo da velha/module/keydown.js"
inputs.addEventListener('keydown',keydown)

import { calculateFromInputs as calculate } from "../025 Jogo da velha/module/calculateFromInputs.js"

document.getElementById('equal').addEventListener('click',calculate)
 


import themeSwitch from "../025 Jogo da velha/module/themeSwitch.js"

document.getElementById('themeSwitch').addEventListener('click',themeSwitch)



document.getElementById('copyToClipboard').addEventListener('click',function(){
  window.navigator.clipboard.writeText(resultInput.value)

})