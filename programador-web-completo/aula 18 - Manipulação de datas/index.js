//Comando base para pegar a data
let data = new Date()
console.log(data)

//Para pegar o ano atual com 4 dígitos
let ano = data.getFullYear()
console.log(ano)

//Para pegar o mês em número (de 0 a 11, como uma matriz, sendo que "0" é Janeiro)
let mes = data.getMonth()
console.log(mes)

//Mostrando o mês no formato escrito
const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

//Pegar dia do mês = 1 a 31

let diaMes = data.getDate()
console.log(diaMes)

//Dia da semana - De 0 até 6, como se fosse uma matriz
let diaSemana = data.getDay()
console.log(diaSemana)
const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
let diaSemanaEscrito = diasDaSemana[data.getDay()]
console.log(diaSemanaEscrito)
//alert(diaSemanaEscrito)

//Exibir a hora - De 0 até 23
let hora = data.getHours()
console.log(hora)

//Exibir minutos - de 0 a 59
let minutos = data.getMinutes()
console.log(minutos)

//Exibir segundos - de 0 até 59
let segundos = data.getSeconds()
console.log(segundos)

//Exibir milisegundos - de 0 até 999
let milisegundos = data.getMilliseconds()
console.log(milisegundos)

//Exibindo a data no padrão Brasileiro - Dia/Mês/Ano
let dataBr = data.toLocaleString('pt-BR')
/* Para mostrar somente a data
let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'}) */
/* Para exibir somente a hora
let dataBr = data.toLocaleString('pt-BR', {timeStyle: 'short'}) */
console.log(dataBr)

//Pegando os valores separados
d = new Date()
diaMes = d.getDate()
mes = d.getMonth() + 1
ano = d.getFullYear() + 1

//Criando função para add 0 em números de 1 digito
function addZero(x) {return x<10 ? '0' + x : '' + x} 

let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano
console.log(dataPadraoBr)

//Comparar datas = maior ou menor
var hoje = new Date()
var vencimento = new Date(2023, 11, 7)

if (hoje > vencimento){
    console.log("ATENÇÃO! Sua fatura está atrasada!")
} else {
    console.log("Parabéns! Sua fatura está em dia.")
}

//Diferença entre duas datas em dias
var dataInicial = new Date()
var dataFinal = new Date(2023, 11, 31)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

console.log("Faltam " + diferencaDias + " dias para a virada do ano!")