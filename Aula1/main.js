'use strict'

function trocarTitulo(){
    const tituloAtual = document.getElementById('titulo')
    const tituloNovo = prompt('Digite um titulo')
    tituloAtual.textContent = tituloNovo
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)

    /* serve apenas para mostrar no console, não aparece na tela
    console,log(conteudo)

    criando variaveis: (palavras reservadas);
    var nome = ana
    let nome = ana
    const nome = ana

    3 - var -> Mutável -> Global
    2 - let -> Mutável -> Bloco {}
    1 - const -> Imutável -> Bloco {} */