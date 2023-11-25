/* function nomeDaFunção(valores) {
    return
} */

//FUNÇÃO SOMA
function soma(valor1, valor2) {
    return valor1 + valor2
}
//document.querySelector("p#texto").innerHTML = soma(10, 55) > Apresentando resultado na TAG <p> e a id(#) texto.
let total = soma(10, 27)//Atribuindo a uma let
alert(total)//Apresentando resultado como 'alert'.

//FUNÇÃO COTAÇÃO DÓLAR
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}
let cotacao = realParaDolar(10, 5.20)
alert(cotacao)

//FUNÇÃO COTAÇÃO DÓLAR PERSONALIZADA
function realDolar(valorReal, cotacaoHoje) {
    return valorReal * cotacaoHoje
}
let valorReal = 7.89
let cotacaoHoje = 5.08
let final = realDolar(valorReal, cotacaoHoje)
alert('O valor em real é R$: ' + valorReal + ' o valor em dólar U$ é: ' + final.toFixed(2)) //toFixed() > Mostra quantas casas decimais devem ser exibidas.

function alertaHello() {
    alert("Olá pessoal!")
}

alertaHello() //Exibindo como alert

//FUNÇÃO PARA CONVERTER FARENHEIT PARA CELSIUS
function paraCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32)
}

let x = paraCelsius(77)

alert("A temperatura é de " + x + " graus celsius")