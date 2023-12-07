//O nome da classe sempre começa com letra maiúscula
class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiiiiiiiii"
    }
}

const uno = new Carro("Fiat", "Uno", 2001)
const gol = new Carro("VW", "Gol", 2002)
console.log(uno.buzina())
console.log(gol.buzina())
gol.ano = 2014
console.log(gol)

/* const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
} */