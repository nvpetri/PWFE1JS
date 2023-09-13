'use strict'

const cepInput = document.getElementById('input')

const loadCep = (info) => {

    const rua = document.getElementById('rua').value = info.logradouro

    const bairro = document.getElementById('bairro').value = info.bairro

    const cidade = document.getElementById('cidade').value = info.localidade

    const estado = document.getElementById('estado').value = info.uf

}

const inputCep = async() => {
    let input = document.getElementById('input').value
    let cep = String(input).replace('-', '')

    const api = `https://viacep.com.br/ws/${cep}/json/`
    const resposta = await fetch(api)
    const infoCep = await resposta.json()

    loadCep(infoCep)
}

cepInput.addEventListener('blur',inputCep)
cepInput.addEventListener('keyup', function(enter){
    if(enter.key === 'Enter'){
        inputCep()
    }
})