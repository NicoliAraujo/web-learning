var numero = 1 // se trocar por let, vai continuar o mesmo resultado, pq
// o que tem preferência é a declaração do escopo mais interno

{
  let numero = 2
  console.log('dentro  =', numero)
}

console.log('fora = ', numero)

// let tem escopo de bloco, de função e global.
