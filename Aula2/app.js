'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}forma1.addEventListener('click', mudarCor)

function mudarForma(){
    forma2.classList.toggle('circulo')
}forma2.addEventListener('click', mudarForma)

function mudarTamanho(){}