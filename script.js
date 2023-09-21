const lis = document.querySelectorAll('li')
lis.forEach(li => {li.addEventListener('mouseover',bigger), li.addEventListener('mouseout', notBigger), li.classList.add('itens')})

const uls = document.querySelectorAll('ul')
uls.forEach(ul => {ul.classList.add('menu')})

function bigger(el){
  el.currentTarget.classList.add('bigger')
} 
function notBigger(el){
  el.currentTarget.classList.remove('bigger')
}  
