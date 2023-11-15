let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} //{} - Estamos nos referindo a um objeto.

amigo.engordar(2.1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)