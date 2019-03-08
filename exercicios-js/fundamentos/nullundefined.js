let valor // não inicializada
console.log(valor)
// console.log(valor2) // não foi declarada, resulta erro

valor = null // ausencia de valor, vazio
console.log(valor)
// console.log(valor.toString()) // se vc tentar usar certas funcões com uma variaǘel que pode estar nula potencialmente, vai dar TypeError

const produto = {} // objeto vazio
console.log(produto.preco) // undefined. não foi declarado dentro do objeto vazio, nao gera erro
// console.log(produto.preco.a) // retorna TypeError, não dá pra acessar o valor de um item dentro de um atributo indefinido
console.log(produto) // vazio

produto.preco = 4.60
console.log(produto)

produto.preco = undefined // evitar
console.log(!!produto.preco) // falso, não existe
console.log(produto) // atributo undefined não deleta o item
// delete produto.preco // deleta

produto.preco = null // sem preco
console.log(!!produto.preco) // falso
console.log(produto)
