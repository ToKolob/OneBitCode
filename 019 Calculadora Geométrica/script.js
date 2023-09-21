function trianguloArea(base,altura) {
  return base * altura/2
}
function retanguloArea(base,altura){
  return base * altura
}
function quadradArea(lado){
  return retanguloArea (lado,lado)
}
function trapezioArea(baseA,baseB,altura){
  return (baseA + baseB)*altura/2  
}
function circuloArea(raio){
  return 3.14*raio**2  
}


function startProgram() {
  let menu

  do {
    menu = prompt('***Menu***\n1. Area do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do circulo\n6. Sair')
    switch (menu){
      case '1':
        let p1 = prompt('qual a base?')
        let p2 = prompt('qual a altura?')
        alert(trianguloArea(p1,p2))
        break
      
      case '2':
        let a1 = prompt('qual a base?')
        let a2 = prompt('qual a altura?')
        alert(retanguloArea(a1,a2))
        break

      case '3':
        let b1 = prompt('qual o lado?')
        alert(quadradArea(b1))
        break

      case '4':
        let c1 = prompt('qual a base maior?')
        let c2 = prompt('qual a base menor?')
        let c3 = prompt('qual a altura?')
        alert(trapezioArea(c1,c2,c3))
        break

      case '5':
        let d1 = prompt('Qual o raio?')
        alert (circuloArea(d1))
        break

      case '6':
        alert('saindo...')
        break

      default:
        alert ('Opçaõ invalida')
    }    
  } while (menu !== '6');
}