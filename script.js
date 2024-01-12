let expressao = ''
var res = document.querySelector('div#resultado')
var preres = document.querySelector('div#preres')

function clicou(id) {
    if (expressao.length >= 10) {
        alert('esta calculadora so vai ate 10 digitos')
    } else {
        expressao += id
        res.innerHTML = expressao

        let resultado = eval(expressao)
        if (resultado !== undefined) {
            preres.innerHTML = resultado
        }
    }
}

function calcular() {
    let resultado = eval(expressao)
    if (resultado === undefined) {
        
    } else {
        res.innerHTML = resultado
        preres.innerHTML = ''
        expressao = resultado 
    }
}

function apagar() {
    if (expressao.length > 0) {
        expressao = expressao.slice(0, -1)
        res.innerHTML = expressao
        if (expressao !== ''){
            preres.innerHTML = eval(expressao)
        } else {
            preres.innerHTML = ''
        }
    }
}
