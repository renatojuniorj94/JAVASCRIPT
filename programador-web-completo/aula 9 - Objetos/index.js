const carro = {
    marca: "toyota",
    modelo: "etios",
    ano: 2018,
    placa: "ABC-1234",
    //Abaixo temos uma função
    buzina: function() {alert('Biiiiiiiiiiiiii')},
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo
    }
}

console.log(carro.completo())

/* console.log(carro.ano)
console.log(carro["marca"]) 
*/

/* Chamando a função buzina
carro.buzina() 
*/