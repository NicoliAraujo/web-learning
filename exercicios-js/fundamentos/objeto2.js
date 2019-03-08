console.log(typeof Object) //
console.log(typeof new Object) // retorna um objeto instanciado a partir de uma função new Objetct(), tá chamando um construtor

const Cliente = function () {}

console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // jeito novo de escrever uma função
console.log(typeof Produto)
console.log(typeof new Produto())
