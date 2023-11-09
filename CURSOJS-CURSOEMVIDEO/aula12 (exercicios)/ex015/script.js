function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Como se estivesse criado uma tag img em HTML
        img.setAttribute('id', 'foto') //Como se estivesse criado uma tag img em HTML
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { //Criança
                img.setAttribute('src', 'bebe-menino.png')

            } else if ( idade >= 10 && idade <= 21) { //Jovem
                img.setAttribute('src', 'jovem-homem.png')

            } else if (idade >= 22 && idade < 50) { //Adulto
                img.setAttribute('src', 'adulto-homem.png')

            } else { //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //Criança
                img.setAttribute('src', 'bebe-menina.png')
            } else if ( idade >= 10 && idade < 21) { //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade >= 22 && idade < 50) { //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else { //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}