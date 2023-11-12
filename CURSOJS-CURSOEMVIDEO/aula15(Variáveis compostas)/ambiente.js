let num = [5,8,4,9] //A primeira chave começa a contar pela chave 0. Ex: 0 = 5, 1 = 8, 2 = 4, 3 = 9

num [4] = 6 //Adicionamos o conteúdo 6 na chave 4.

num.push(7) //Adicionando um conteúdo a última chave, independete de qual seja. Nesse caso o conteúdo 7 foi atribuído a chave 5

num.length //Faz a contagem de quantos quantos elementos possui a array.

num.sort() //Coloca o conteúdo em ordem crescente dentro da array.

num.indexOf(7) //Ele vai buscar o conteúdo 7 e retornar a sua chave, nesse caso a chave 2.
num.indexOf(3) //Nesse caso ele não possui o conteúdo 3 dentro da array e vai retornar o valor -1(Não existe)

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(num[0])
console.log(num.indexOf(3))

let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}