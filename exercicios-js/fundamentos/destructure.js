/*destructure é um operador de desestruturação
 * novo recurso do es2015
 */

const pessoa = {
  nome: 'ana',
  idade: 5,
  endereco: {
    logradouro: 'rua a',
    numero: 1000
  }
}

// retire do objeto pessoa os 2 primeiros atributos e vicule-os às constantes nome e idade. A variavel tem que ter o mesmo nome dos atributos internos
const {
  nome,
  idade,
  endereco
} = pessoa

console.log(pessoa, nome, idade, endereco)

const {
  nome: n,
  idade: i,
  endereco: e
} = pessoa

console.log(pessoa, n, i, e)

const {
  sobrenome,
  bemHumorada = true //setando um valor default caso não tenha a chave no objeto
} = pessoa
console.log(sobrenome, bemHumorada)

const {
  endereco: {
    logradouro,
    numero,
    cep
  }
} = pessoa
console.log(logradouro, numero, cep) // cep undefined

const {
  conta: {
    ag,
    num
  }
} = pessoa
console.log(ag, num)
// retorna erro pq tá tentando acessar um item que não e um objeto dentro de pessoa
