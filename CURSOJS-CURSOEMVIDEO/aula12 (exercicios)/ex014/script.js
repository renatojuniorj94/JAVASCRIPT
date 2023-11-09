function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotos/dia.png'
        document.body.style.background = '#73a7f7'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#dcb883'
    } else {
        //BOA NOITE!
        img.src = 'fotos/noite.png'
        document.body.style.background = '#022e5a'
    }
}