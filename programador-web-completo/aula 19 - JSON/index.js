//JSON
//Para adicionar JSON em HTML usamos a tag <pre></pre>

//Objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    //Podemos adicionar um array em JSON
    motor: ["1.3", "1.5", "2.0"]
}

//Convertendo objeto 'carro' em texto.
let texto = JSON.stringify(carro)

document.getElementById('area').innerHTML = texto
console.log(texto.modelo)//Ele apresenta 'undefined' porque não é mas um objeto.

//Convertendo novamente para objeto
let obj = JSON.parse(texto)
//Pegamos um valor desse objeto
console.log(obj.modelo)
console.log(obj.motor[2])

const ajax = new XMLHttpRequest()
//Pegando(GET) informações de um site, no caso '01001000' é um cep
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
//Enviando a solicitação
ajax.send()

ajax.onload = function () {
    //Resposta em texto vindo da requisição acima
    document.getElementById('area').innerHTML = this.responseText
    //Para pegar um determinado item do site acima, primeiro temos que converter o arquivo em objeto
    let obj = JSON.parse(this.responseText)
    /*alert(obj.ddd)*/
}

function buscarCEP() {
    let input = document.getElementById('cep').value

    const ajax2 = new XMLHttpRequest()
    ajax2.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/')
    ajax2.send()

    ajax2.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText
        //Pegando somente algumas informações do site
        let obj = JSON.parse(this.responseText)//Aqui transformamos em objeto
        let logradouro = obj.logradouro
        let cidade = obj.localidade
        let estado = obj.uf

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado
    }
}

