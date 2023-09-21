const dayjs = require('dayjs')


function sauIdade(data){
  const dataAtual = dayjs()
  const nascimento = dayjs(data)

  const idade = dataAtual.diff(nascimento, 'year')
  console.log( `A sua idade é ${idade} anos` );

  const aniversario = nascimento.add(idade + 1, 'year')
  console.log(`Seu proximo aniversario será em ${aniversario.format("DD [de] MMMM [de] YYYY[, na] dddd")}`);

  const proximoAniversario = aniversario.diff(dataAtual, 'day')
  console.log(`Falta ${proximoAniversario} dias para a comemoração`)
}

sauIdade('1997/08/25')