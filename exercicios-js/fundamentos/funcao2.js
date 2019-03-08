// Armazenando função na variável
// constante recebe função anônima, sem nome
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(3, 4)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b
}

console.log(soma(3, 4))

// retorno implícito, pra funções com uma linha
const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))

const not = a => !a // função atribuida a uma variável quando a funçao tem só um parâmetro e uma linha
console.log(not(true))
