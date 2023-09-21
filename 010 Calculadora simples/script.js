txnum1 = document.querySelector('input#num1')
txnum2 = document.querySelector('input#num2')
txanswer = document.querySelector('span#res')

function calculate_numbers() {    
    txanswer.innerHTML = 
    `Adição: ${Number(txnum1.value)} + ${Number(txnum2.value)} = ${Number(txnum1.value) + Number(txnum2.value)}.<br>
    Subitração: ${txnum1.value} - ${txnum2.value} = ${txnum1.value-txnum2.value}.<br>
    Multiplicação: ${txnum1.value} x ${txnum2.value} = ${txnum1.value*txnum2.value}.<br>
    Divisão: ${txnum1.value} / ${txnum2.value} = ${txnum1.value/txnum2.value}.<br> `

}