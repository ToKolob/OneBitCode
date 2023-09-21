houses = []

function realEstateListing() {  

  do{

    menu = prompt('****MENU****\n' + houses.length + ' Casas cadastradas' + '\n1 - Salvar novo imóvel\n2 - Mostrar todos os imóveis\n3 - Sair')

    switch (menu){      
      case '1':
        //salvar novo imóvel
        let property = {}
        property.owner = prompt('qual o nome do proprietário?')
        property.bedrooms = prompt('Quantos quartos?')
        property.hasGarage = prompt('Tem garagem?')
        houses.push(property)

        break
      case '2':
        // mostrar todos imóveis
        
        housesAlert = '***Casas Cadastradas***\n'
        for (house = 0; house < houses.length; house ++){
          housesAlert += `Casa ${house+1}\n Proprietário = ${houses[house].owner}\nQuartos = ${houses[house].bedrooms}\nTem garagem = ${houses[house].hasGarage}\n\n`          
        }
        alert(housesAlert)


        break
      case '3':
        window.alert('saindo do sistema')


          const table = document.getElementById('housesTable');
        table.innerHTML = '<tr><th>Casa</th><th>Proprietário</th><th>Quartos</th><th>Tem garagem</th></tr>';

        for (let i = 0; i < houses.length; i++) {
          const row = table.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          const cell4 = row.insertCell(3);

          cell1.innerHTML = `Casa ${i + 1}`;
          cell2.innerHTML = houses[i].owner;
          cell3.innerHTML = houses[i].bedrooms;
          cell4.innerHTML = houses[i].hasGarage;
        }
      

        break
      default:
        alert('Opção invalida')

    }
  }while(menu != 3)













}