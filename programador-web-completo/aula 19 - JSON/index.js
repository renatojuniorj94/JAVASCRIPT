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