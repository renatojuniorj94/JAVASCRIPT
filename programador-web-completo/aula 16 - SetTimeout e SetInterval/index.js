function ativarContagem() {
    /* document.getElementById('tempo').innerHTML = "Começou a contar!"
    tempo = setTimeout(function() {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout!"
    }, 5000) //5000 = 5 segundos */

    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML
        var soma =parseInt(cronometro) - 1

        if(soma===0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado!"
            pararContagem()
        } else {
            document.getElementById('tempo').innerHTML = soma
        }

        /* document.getElementById('tempo').innerHTML = soma */
    }, 1000)
}

function pararContagem() {
    /* clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "Parou a contagem!" */
    clearInterval(tempo)
}