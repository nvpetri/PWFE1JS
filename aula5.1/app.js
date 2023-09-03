'use strict'

const pessoas = [
    {
        nome: 'Gabriela',
        mensagem: 'Petri, você viu o Gu?',
        quantidade: '2',
        tempo: 'Há 30 minutos',
        foto: 'gabriela.jfif',
        contato: 'Nicolas Petri'
    },
    {
        nome: 'Prof° Leonid',
        mensagem: 'Proxima aula será p...',
        quantidade: '1',
        tempo: 'Há 5 minutos',
        foto: 'leonid.jfif',
        contato: 'DS1AIT'
    },
    {
        nome: 'Vitor',
        mensagem: 'Esse projeto da Bibl...',
        quantidade: '5',
        tempo: 'Há 1 minuto',
        foto: 'vitor.jfif',
        contato: 'Nicolas Petri'
    },
    {
        nome: 'Nicolas Petri',
        mensagem: 'Gu, a Gab tá te procu...',
        quantidade: '18',
        tempo: 'Há 25 minutos',
        foto: 'nicolas.png',
        contato: 'Gustavo Henrique'
    }
]

function mostrarCards(pessoas){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoas.foto}`
    img.alt = pessoas.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = pessoas.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qtdMensagem')
    qtdMensagem.textContent = pessoas.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = pessoas.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

pessoas.forEach(mostrarCards)