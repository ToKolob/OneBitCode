let txfirstname = document.getElementById('name')
let txlastname = document.getElementById('surname')
let study_matter = document.getElementById('study_matter')
let birthday_year = document.getElementById('birthday')
let answer = document.getElementById('res')

//obter a data atual
const date_now = new Date()
const year_now = date_now.getFullYear()



function send_data() {
    if (txfirstname.value.length == 0 || txlastname.value.length == 0 || study_matter.value.length == 0) {
        alert('verifique os dados e tente novamente.')        
    }
    else {
        answer.innerHTML = `Seja bem vindo ao curso de ${study_matter.value} recruta ${txfirstname.value} ${txlastname.value} de ${year_now - birthday_year.value} anos.`;
    }
    
}