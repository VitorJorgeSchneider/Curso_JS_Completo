const nomes = ["Daniel", "Maria", ""]
const pessoa = {nome: "Daniel", idade: 10, email: ""}


const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Helena",
    idade: 45
}, {
    nome: "João",
    idade: 18
}]
console.log(pessoas[0].nome)

let i = 0
while(i < pessoas.length){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos!`)
    i++
}
