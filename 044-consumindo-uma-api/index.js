function render(transacaoDados){
  //a tr vai conter todas as td que se referem a cada coluna da linha dos itens da lista
  const transacao = document.createElement('tr')
  transacao.classList.add('transação')
  transacao.id = `transacao-${transacaoDados.id}`

  const data = document.createElement('td')
  data.classList.add('data')
  data.textContent = transacaoDados.data

  const valor = document.createElement('td')
  valor.classList.add('valor')
  valor.textContent = parseFloat(transacaoDados.valor).toFixed(2)
  valor.style = 'text-align: right;'

  const descricao = document.createElement('td')
  descricao.classList.add('descricao')
  descricao.textContent = transacaoDados.descricao

  const deletar = document.createElement('button')
  deletar.textContent ='X'
  deletar.addEventListener('click',deletarTransacao)
  deletar.style='background-color: red; color: white;'

  const alterar = document.createElement('button')
  alterar.textContent ='alterar'
  alterar.addEventListener('click',alterarTransacao)

  transacao.append(data, valor, descricao, alterar, deletar)

  document.querySelector('#receber').appendChild(transacao)
  saldoAtualizado();
}

async function acessarURL(){
  const transacoes = await fetch('http://localhost:3000/transacao').then(res => res.json())

  transacoes.forEach(render);  
  saldoAtualizado();
}

document.addEventListener('DOMContentLoaded', () => {acessarURL()})

const form = document.querySelector('form')
form.addEventListener('submit',async ev=>{
  ev.preventDefault()

  const transacaoDados = {
    data:document.querySelector("input#data").value,
    valor: document.querySelector('input#valor').value,
    descricao: document.querySelector('input#descricao').value
  }

  const resposta = await fetch('http://localhost:3000/transacao',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacaoDados)

  })

  const transacaoSalva = await resposta.json()
  form.reset()
  render(transacaoSalva)
})

async function deletarTransacao(ev){

  const id = ev.target.closest('tr').id
  const idSplit = id.split('-')
  console.log(idSplit[1]);

  ev.target.closest('tr').remove()
  
  const deletar = await fetch(`http://localhost:3000/transacao/${idSplit[1]}`,{
    method:'DELETE',    
    headers: {
      'Content-Type': 'application/json'
    }
    
  })
  saldoAtualizado();

}

async function alterarTransacao(ev){
  const id = ev.target.closest('tr').id.split('-')[1]

  console.log(id);

  ev.target.closest('tr').remove()

  const transacaoDados = {
    data:document.querySelector("input#data").value,
    valor: document.querySelector('input#valor').value,
    descricao: document.querySelector('input#descricao').value
  }

  const transacaoModificada = await fetch(`http://localhost:3000/transacao/${id}`,{
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacaoDados)
  })

  render(await transacaoModificada.json())
  form.reset()
  saldoAtualizado();

}
async function saldoAtualizado() {
  try {
    const response = await fetch('http://localhost:3000/transacao');
    const transacoes = await response.json();

    // Inicialize o saldo com zero
    let saldo = 0;

    // Itere pelas transações e atualize o saldo
    transacoes.forEach((transacao) => {
      saldo += parseFloat(transacao.valor);
    });

    const saldoNaTela = document.querySelector("#saldo")
    saldoNaTela.innerHTML = saldo.toFixed(2) 

    console.log('Saldo Atualizado:', saldo.toFixed(2)); // Arredonde o saldo para 2 casas decimais
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

saldoAtualizado();

