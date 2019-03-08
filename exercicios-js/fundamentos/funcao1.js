// Funcao sem retorno no js

function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 4)
imprimirSoma(2) // retorna nan pq soma 2 com nulo
imprimirSoma(2, 4, 4, 7, 8)
imprimirSoma() // retorna nan

// Função com retorno
function soma(a, b = 0) {
  return a + b
}

console.log(soma(3, 5))
console.log(soma(3)) // retorna 3 pq b é definido
console.log(soma()) // retorna nan pq soma nada com nada
