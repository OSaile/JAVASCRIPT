let amigo = {nome: 'José', sexo: 'M', peso: 85.5, engordar(p){
    console.log('Engordou')
    this.peso +=1
}

}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)