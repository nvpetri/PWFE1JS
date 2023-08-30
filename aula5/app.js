'use strict'

const funcionarios = [
    {
        nome: 'Maria Souza',
        cargo: 'Designer',
        imagem: 'maria.jpg'
    },
    {
        nome: 'João Silva',
        cargo: 'DBA',
        imagem: 'joao.jpg'
    },
    {
        nome: 'Hugo Pereira',
        cargo: 'FrontEnd',
        imagem: 'hugo.jpg'
    },
    {
        nome: 'Ana Maria',
        cargo: 'BackEnd',
        imagem: 'ana.jpg'
    }
]

function mostrarCards(funcionarios){
    const cardContainer = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${funcionarios.imagem}`
    img.alt = funcionarios.nome

    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card-description')

    const nome = document.createElement('h2')
    nome.textContent = funcionarios.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    cardDescription.replaceChildren(nome, cargo)

    card.replaceChildren(img, cardDescription)

    cardContainer.appendChild(card)

}

funcionarios.forEach(mostrarCards)