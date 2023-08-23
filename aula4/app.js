'use strict'

const mostrarTodos = document.getElementById('mostrar-todos')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros')
 
    const ultimoIndice = numeros.length

    for(let contador = 0; contador < ultimoIndice ; contador ++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }

}

mostrarTodos.addEventListener('click', mostrarTodosNumeros)