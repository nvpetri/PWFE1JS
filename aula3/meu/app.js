'use strict'

const button = document.getElementById('somar')
const button2 = document.getElementById('ident')
const botaoMedia = document.getElementById('media')

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

function calcularMedia () {

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        media.textContent(`Olá sua média é ${media}, você foi aprovado!`)
    }else{
        const notaExame = prompt(`Sua média é ${media}. Insira sua nota de exame`)
        const media2 = (media + Number(notaExame)) / 2
        
        if (media2 >= 5){
            alert(`Sua nova média é ${media2}. Aprovado em exame`)
        }else{
            alert(`Sua nova média é ${media2}. Você foi reprovado`)
        }

    }

}