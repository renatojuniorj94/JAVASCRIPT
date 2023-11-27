function eventoClick() {
    //alert('Acionou um evento de click.')
    document.body.style.backgroundColor = 'yellow'
}

function eventoDblClick() {
    alert('Evento de clique duplo')
}

function viraVermelho() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "red"
}

function viraAzul() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "blue"
}

function adicionaTexto() {
    let p = document.getElementById("texto")
    //append > adicionar
    p.append("O mouse moveu")
}