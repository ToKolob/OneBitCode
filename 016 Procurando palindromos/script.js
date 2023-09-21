let wordAnalised = prompt ('Qual a palavra analisada?')
let newWord = ''

for (let index = 0;index < wordAnalised.length;index ++){
  console.log (wordAnalised[wordAnalised.length-index-1])
  newWord += wordAnalised[wordAnalised.length-index-1]

}

if (newWord.toLowerCase() == wordAnalised.toLocaleLowerCase()) {
  alert (`A palavra ${newWord} é um palindromo!` )
}
else {
  alert (`Não é um palindromo, a palavra muda para ${newWord}.` )
}
