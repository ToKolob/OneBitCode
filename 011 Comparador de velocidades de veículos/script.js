let txcar1 = document.querySelector('input#car1')
let txcar2 = document.querySelector('input#car2')
let car1 = Number(txcar1.value)
let car2 = Number(txcar2.value)
let outPut = document.querySelector('div#outp')

function speedCar() {
    let txcar1 = document.querySelector('input#car1')
    let txcar2 = document.querySelector('input#car2')
    let car1 = Number(txcar1.value)
    let car2 = Number(txcar2.value)
    if (car1 == "" || car2 == ""){
        outPut.innerHTML = 'Insira as velocidades dos veículos para comparar suas velocidades'
        
    }
    else if (car1 == car2) {
        outPut.innerHTML = 'Ambos estão a mesma velocidade'
    }
    else if (car1 > car2) {
        outPut.innerHTML = 'O primeiro carro está mais rápido!'
    }
    else {
        outPut.innerHTML = 'o segundo carro está mais rápido!'
    }

}

txcar1.addEventListener('input', speedCar)
txcar2.addEventListener('input', speedCar)