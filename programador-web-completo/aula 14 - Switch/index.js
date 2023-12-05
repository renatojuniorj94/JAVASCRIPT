function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase() //Transformando as letras da variável "cor" em minúsculas.

    switch (cor) {
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue"
            break
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red"
            break
        case "amarelo":
            //o que acontece
            document.body.style.backgroundColor = "yellow"
            break
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " + cor
    }
}

function diaDaSemana() {
    var dia = new Date().getDay()
    console.log(dia)

    switch (dia) {
        case 1:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Domingo"
            break
        case 2:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Segunda"
            break
        case 3:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Terça"
            break
            case 4:
            document.getElementById("teste2").innerHTML = "Hoje é Quarta"
            break
        case 4:
            document.getElementById("teste2".innerHTML).innerHTML = "Hoje é Quinta"
            break
        case 5:
            document.getElementById("teste2").innerHTML = "Hoje é Sexta"
            break
        case 6:
            document.getElementById("teste2").innerHTML = "Hoje é Sábado"
            break
        default:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Não seu que dia é."
    }
}

/* switch (expressao) {
    case a:
        //o que acontece
        break
    case b:
        //o que acontece
        break
    case c:
        //o que acontece
        break
    default:
        //o que acontece
} */