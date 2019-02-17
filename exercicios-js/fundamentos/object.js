const prod1 = {} // objeto vazio
prod1.nome = 'Celular ultra mega'

/*
 * objeto em js é uma coleção de chave valor, assim como o dict no python
 */
prod1.preco = 4666.39
prod1['Desconto_legal'] = 0.5

console.log(prod1)

const prod2 = {
  nome: 'camisa polo',
  preco: 35.69,
  obj: {
    blabla: 1
  }
}

console.log(prod2)
/*
 *json não é o mesmo que objeto: formato textual  de objetos
 *'{"nome": "camisa polo", "preco": 35.69}' é um json valido
 *aspas duplas nas strings
 */
