/*
 * par nome-valor
 * um objeto é uma coleção de pares nome valor, um dicionário
 */
const saudacao = 'Opa' // contexto léxico 2

function exec() {
  const saudacao = 'Falaa' // contexto lexico 2
  return saudacao
}

// Objetos são grupos aninnhados de pares nome/valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    nome: 'Rua 3', // nome em outro contexto léxico
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
