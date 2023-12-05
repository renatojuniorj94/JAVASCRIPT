/* const lista = ["arroz", "feijão", "macarrão"]
console.log(lista)
alert(lista[lista.length -1])//Mostra o nome do último item
alert(lista.length -1)//Mostra a posição do último item
lista.push("Brasileiro")//Método .push adiciona um item dentro da matriz.
lista[lista.length] = "Carioca"//Adicionando sem método push
alert(lista.length)//Mostra quantos itens tem na lista
console.log(lista)
/*
alert(Array.isArray(lista)) Para saber se é um Array (True or false) */

/* Aula 12 - Métodos para Arrays(Matrizes) */

let pessoa = ["Renato", "Junior", 29, "Dev"];

pessoa.pop() //Método pop > Remove o último item da matriz
pessoa.push("Flamenguista") //Método push > Adiciona um item na última posição da matriz
pessoa.shift() //Remove o primeiro item da matriz
pessoa.unshift("Renato") //Adiciona um item na primeira posição da matriz
delete pessoa[0] //Deleta o item na posição 0, mas não muda a posição das chaves dentro da matriz
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2") //1 = Passa a posição que o item vai ser adicionado / 0 = Passa quantos itens vão ser exlcuidos

document.getElementById("teste").innerHTML = pessoa.join(" - ")//Método join


const lista1 = ["Arroz", "Feijão", "Maionese", "Carne"]
const lista2 = ["Suco", "Refrigerante", "Cerveja"]
const lista3 = ["Pudim", "CheeseCake", "Torta Alemã"]
const superLista = lista1.concat(lista2, lista3)

document.getElementById("teste2").innerHTML = superLista.join(", ")


const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Zico",
    "Neymar",
    "Messi",
    "CR7",
    "Varela",
]
const ordemAlfab = jogadores.sort() //Ordena itens da matriz por ordem alfabetica
/* 
jogadores.sort()
jogadores.reverse() > Para reverter a ordem alfabética
*/
const craques = jogadores.slice(2, 7) //Mostra os itens a partir da posição 2 da matriz até a posição 7
document.getElementById("teste3").innerHTML = craques.join(", ")


const numeros = [40, 100, 1, 5, 25, 10]
const maior20 = numeros.filter(filtragem)

numeros.sort(function(a, b) {return a-b})//Usando hack para fazer a ordenação numérica

function maiorNumero(array){
    return Math.max.apply(null, array)
} //Função para exibir maior número da matriz

function menorNumero(array){
    return Math.min.apply(null, array)
} //Função para exibir menor número

function filtragem(value, index, array) {
    return value > 20
}

document.getElementById("teste4").innerHTML = numeros.join(" - ")
document.getElementById("teste5").innerHTML = maiorNumero(numeros)
document.getElementById("teste6").innerHTML = menorNumero(numeros)
document.getElementById("teste7").innerHTML = maior20.join(" - ")