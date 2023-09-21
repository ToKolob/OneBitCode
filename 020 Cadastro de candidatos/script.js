let menu = ''

let jobVacancy =[{nome:"Administrador",descricao:"auxiliar de serviços administrativos",espira:'25/12',candidatos:['Felipe','Marcio','Penelope']},{nome:"Escriturário",descricao:"auxiliar de escritório",espira:'01/02', candidatos:['Gilmar']}]

function listVacancy(){
  let textToShow = jobVacancy.reduce(function(show,Vacancy,index){
    show += `\n${index+1}. Nome: ${Vacancy.nome}\nNumero de candidatos: ${Vacancy.candidatos.length}\n`
    return show
  },"***Lista de vagas***\n") 
  alert(textToShow)

}
function creatVacancy(){
  nome = prompt('Qual o nome da vaga?')
  descricao = prompt('Descreva a vaga.')
  espira = prompt('Qual a data limite da vaga?')
  
  jobVacancy.push({nome,descricao,espira,candidatos:[]})
}
function showVacancy(){
  

  index = prompt('Qual vaga deseja visualizar?')-1

  textCandidatos = jobVacancy[index].candidatos.reduce(function(total,valor,index){
    total += `${index+1} ${valor}\n`
    return total
  },'\nLista de candidatos\n')

  alert (`${index+1}. Nome: ${jobVacancy[index].nome}\n Descrição: ${jobVacancy[index].nome}\n Data limite: ${jobVacancy[index].espira}\n Total de candidatos: ${jobVacancy[index].candidatos.length} ${textCandidatos} `)


}
function addCandidate(){
  newCandidate = prompt('Qual o nome do candidato?')
  selectVacancy = prompt('Qual vaga deseja se cadastrar?')
  jobVacancy[selectVacancy].candidatos.push = newCandidate
}





function startProgram() {  
  do {
    menu = prompt('***Menu***\n\n    1. Listar vagas disponíveis\n    2. Criar nova vaga\n    3. Visualizar uma vaga\n    4. Inscrever candidato em uma vaga\n    5. Excluir uma vaga\n    6. Sair')
    switch (menu) {
      case '1':
        //Listar vagas  
        listVacancy()

        break;

      case '2':
        creatVacancy()
        //Criar nova vaga
        break;

      case '3':
        showVacancy()
        //Visualizar uma vaga        
        break;

      case '4':
        addCandidate()
        //Inscrever um candidato a vaga
        
        break;
      case '5':
        //Excluir uma vaga
        
        
        break;
      case '6':
        //Sair
        alert ('Saindo do sistema')        
        break;
    
      default:
        alert('opção invalida!')
        break;
    }
    
  } while (menu != 6);
  
}