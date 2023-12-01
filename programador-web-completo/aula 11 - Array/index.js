const lista = ["arroz", "feijão", "macarrão"]

alert(Array.isArray(lista))//Para saber se é um Array (True or false)

const pessoa = ["Renato", "Junior", 29, "Dev"]
document.getElementById("teste").innerHTML = pessoa.join(" - ")