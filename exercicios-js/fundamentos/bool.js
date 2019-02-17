let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// de number para bool
isAtivo = 1 //! é a negação
console.log(!!isAtivo) // força a conversão para true ou false

console.log('os verdadeiros ...')
console.log(!!3)
console.log(!!-1) // numeros são verdadeiros
console.log(!!' ') // strings preenchidas são verdadeiras
console.log(!!'texto')
console.log(!![]) // arrays são verdadeiros
console.log(!!{}) // objetos literais são verdadeiros
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // resultado da atribuição

console.log('os falsos...')
console.log(!!0) // zero resolve pra falso
console.log(!!'') // string vazia é falsa
/*
é legal usar essa verificação de string vazia pra ver se uma string existe ou não -> exemplo abaixo
 */

let nome = ''
console.log(nome || 'Desconhecido') // se nome for vazio, log imprime só desconhecido
nome = 'Nicoli'
console.log(nome || 'Desconhecido')

console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(('' || null || 0 || 'epa'))
