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

let focoRecebido = false
let backgroundColorAnterior

function campoFocado() {
    if (!focoRecebido) {
         // Armazena o backgroundColor original antes de mudá-lo
         backgroundColorAnterior = document.body.style.backgroundColor
        // Faça a ação desejada, por exemplo, mudar a cor de fundo
        document.body.style.backgroundColor = 'lightgray'
        //alert('Campo focado!') > Em onfocus ao usar o 'alert' aconte um bug, em que a mensagem não desaparece ao clicar em 'ok'
        focoRecebido = true // Atualiza a variável para indicar que o foco foi recebido
    }
}

function fimBug() {
    // Restaura o backgroundColor original ao perder o foco
    document.body.style.backgroundColor = backgroundColorAnterior
    // Reseta a variável quando o campo perde o foco
    focoRecebido = false;
}