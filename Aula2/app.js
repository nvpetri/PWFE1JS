'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')
const tudo = document.getElementById('container')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}forma1.addEventListener('click', mudarCor)

function mudarForma(){
    forma2.classList.toggle('circulo')
}forma2.addEventListener('click', mudarForma)

function mudarTamanho(){
    forma3.classList.toggle('zoom')
}forma3.addEventListener('click', mudarTamanho)

function girar() {
    forma4.classList.toggle('giro')
    forma4.classList.toggle('circulo')
    forma4.classList.toggle('img2')
}forma4.addEventListener('click', girar)

function imagem() {
    forma5.classList.toggle('imagem')
}forma5.addEventListener('click', imagem)

function windowsUp() {
    window.location.href = "https://fakeupdate.net/win7/"
}forma6.addEventListener('click', windowsUp)

function trocar() {
    forma7.classList.toggle('mover')
}forma7.addEventListener('click', trocar)

function sumir(){
    tudo.classList.toggle('sumir')
}forma8.addEventListener('click', sumir)