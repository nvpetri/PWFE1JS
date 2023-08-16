'use strict'

const button = document.getElementById('somar')
const button2 = document.getElementById('ident')

function somar(){
    const numberOne = Number (document.getElementById('numeroUm').value)
    const numberTwo = Number (document.getElementById('numeroDois').value)
    const result = document.getElementById('result')

    const total = numberOne + numberTwo

    result.textContent = total
}
button.addEventListener('click', somar)

function ident(){
    const numero = parseInt(document.getElementById('numero-it2').value)
    
    const result = document.getElementById('result-it2')

    if (numero > 0){
        result.textContent = 'Positivo'
    }else if (numero < 0){
        result.textContent = 'Negativo'
    }else{
        result.textContent = 'Zero'
    }
}
button2.addEventListener('click', ident)