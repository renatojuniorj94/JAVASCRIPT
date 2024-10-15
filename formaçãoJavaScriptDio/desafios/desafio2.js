const etanol = 4.79
const gasolina = 5.69
const combustivelAtual = gasolina
const mediaConsumoKm = 15
const kmPercorrido = 472

const resultado = (kmPercorrido / mediaConsumoKm) * combustivelAtual
let mensagem = 'O total gasto na viajem foi de R$'.replace("s", "$")
console.log(`${mensagem} ${resultado.toFixed(2).replace(".", ",")}`)

//Correto! :D
//Outra maneira de fazer

const alcool = 4.79
const gasolinaComum = 5.69
const combustivelUsado = "gasolina"
const consumoPorKm = 15
const kmTotal = 472

//OBS: Usamos 'var' por ser de escopo global, ou definimos o console.log dentro da estrutura condicional
if (combustivelUsado === "gasolina") {
    var res = (kmTotal / consumoPorKm) * gasolinaComum
    /* console.log(`O total gasto na viagem foi ${res.toFixed(2).replace(".", ",")}`) */
} else {
    var res = (kmTotal / consumoPorKm) * alcool
    /* console.log(`O total gasto na viagem foi ${res.toFixed(2).replace(".", ",")}`) */
}

console.log(`O total gasto na viagem foi R$ ${res.toFixed(2).replace(".", ",")}`)

//fim