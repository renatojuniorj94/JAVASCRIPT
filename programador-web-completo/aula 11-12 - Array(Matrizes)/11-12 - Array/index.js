const lista = ["arroz", "feijão", "macarrão"]
console.log(lista)
alert(lista[lista.length -1])//Mostra o nome do último item
alert(lista.length -1)//Mostra a posição do último item
lista.push("Brasileiro")//Método .push adiciona um item dentro da matriz.
lista[lista.length] = "Carioca"//Adicionando sem método push
alert(lista.length)//Mostra quantos itens tem na lista
console.log(lista)
/*
alert(Array.isArray(lista)) Para saber se é um Array (True or false)
 */


/* Aula 12 */

const pessoa = ["Renato", "Junior", 29, "Dev"] //Array
pessoa[0] //Selecionando um item de um array
const eu = {firstName:"Renato", lastName:"Junior", age:29, job:"Dev"} //Objeto
eu.nome //Selecionado um item do objeto

document.getElementById("teste").innerHTML = pessoa.join(" - ") //Separando os itens de um array por "-"