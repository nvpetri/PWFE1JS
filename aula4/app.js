'use strict'

const mostrarTodos = document.getElementById('mostrar-todos')
const botaoMostrarPares = document.getElementById('mostrar-pares')
const botaoMostrarImpares = document.getElementById('mostrar-impares')
const botaoDivisivel1 = document.getElementById('mostrar-multiplos')
const botaoDivisivel2 = document.getElementById('mostrar-multiplos2')
const botaoAnterior = document.getElementById('mostrar-anterior')
const botaoAnteriorImpar = document.getElementById('mostrar-anteriorImpar')
const botaoTriplo = document.getElementById('mostrar-triplo')
const botaoPrimo = document.getElementById('mostrar-primo')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }

}

function mostrarPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        if(numeros[contador] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild (novoSpan)
        }
    }
}

function mostrarImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        if(numeros[contador] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild (novoSpan)
        }
    }
}

function divisivel1(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-multiplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        if(numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild (novoSpan)
        }
    }
}

function divisivel2(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-multiplos2')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        if(numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild (novoSpan)
        }
    }
}

function anterior(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-anterior')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] -1
        container.appendChild(novoSpan)
    }
}

function anteriorImpar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-anteriorImpar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        const valor = numeros[contador] -1
        if(valor % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = valor
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = valor -1
            container.appendChild(novoSpan)
        }
    }
}

function triplo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 3 
        container.appendChild(novoSpan)
    }
}

function primo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('cont-mostrar-primo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        
    }
}

botaoPrimo.addEventListener('click', primo)

botaoTriplo.addEventListener('click', triplo)

botaoAnteriorImpar.addEventListener('click', anteriorImpar)

botaoAnterior.addEventListener('click', anterior)

botaoDivisivel2.addEventListener('click', divisivel2)

botaoDivisivel1.addEventListener('click', divisivel1)

botaoMostrarImpares.addEventListener('click', mostrarImpares)

botaoMostrarPares.addEventListener('click', mostrarPares)

mostrarTodos.addEventListener('click', mostrarTodosNumeros)