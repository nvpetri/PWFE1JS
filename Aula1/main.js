'use strict'

function trocarTitulo(){
    const tituloAtual = document.getElementById('titulo')
    const tituloNovo = prompt('Digite um titulo')
    const corEscolhida = prompt('Digite sua cor')
    tituloAtual.textContent = `Escola ${tituloNovo}`

    if(corEscolhida == 'amarelo'){
        tituloAtual.className = ''
        tituloAtual.classList.add('amarelo')
    }else if(corEscolhida == 'verde'){
        tituloAtual.classList.add('verde')
    }
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)

function cadastrar(){
    const nome1 = document.getElementById('nome')
    const nome = prompt('Digite seu nome')
    nome1.textContent = `Nome: ${nome}`

    const idade1 = document.getElementById('idade')
    const idade = prompt('Digite sua idade')
    idade1.textContent = `Idade: ${idade}`

    const cidade1 = document.getElementById('cidade')
    const cidade = prompt('Digite sua cidade')
    cidade1.textContent = `Cidade: ${cidade}`

    const media1 = document.getElementById('media')
    const media = prompt('Digite sua média')
    media1.textContent = `Média: ${media}`

    if(media >= 5){
        media1.className = ''
        media1.classList.add('azul')
    }else if(media < 5){
        media1.className = ''
        media1.classList.add('vermelha')
    }
}

const botaoCadastrar = document.getElementById('cadastrarbutton')
botaoCadastrar.addEventListener('click', cadastrar)

    /* serve apenas para mostrar no console, não aparece na tela
    console,log(conteudo)

    criando variaveis: (palavras reservadas);
    var nome = ana
    let nome = ana
    const nome = ana

    3 - var -> Mutável -> Global
    2 - let -> Mutável -> Bloco {}
    1 - const -> Imutável -> Bloco {} */