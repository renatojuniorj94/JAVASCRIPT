let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //Se o número(n) for maior/igual a 1 e número(n) for menor/igual a 100
        return true
    } else {
    return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) /* Aqui ele avalia se 'num' é um número e se 'num' já está na lista. */ {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}