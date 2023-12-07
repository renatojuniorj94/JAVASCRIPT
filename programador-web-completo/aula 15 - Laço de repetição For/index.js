/* 
Laço de repetição For
Laços oferecem um jeito fácil e rápido de executar uma ação.
*/

/* for (let i = 0; i<10001; i++) {
    document.getElementById("teste").innerHTML += i + ", " 
} */

/* for (let i = 1900; i<=2023; i++) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
} */

/* for (let i = 2023; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
} */

//Automatizando a troca de ano
var ano = new Date().getFullYear()
for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
}

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"]
var tamanho = carros.length

for(let i=0; i<tamanho; i++) {
    document.getElementById("teste2").innerHTML += carros[i] + " - "
}

/* document.getElementById("teste2").innerHTML = carros.join(", ") */