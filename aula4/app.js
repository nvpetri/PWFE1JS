'use strict'

const mostrarTodos = document.getElementById('mostrar-todos')
const botaoMostrarPares = document.getElementById('mostrar-pares')
const botaoMostrarImpares = document.getElementById('mostrar-impares')

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

botaoMostrarImpares.addEventListener('click', mostrarImpares)

botaoMostrarPares.addEventListener('click', mostrarPares)

mostrarTodos.addEventListener('click', mostrarTodosNumeros)