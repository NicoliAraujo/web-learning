/* hoisting é colocar a declaração de uma variável var lá em cima, aí nao dá erro se vc chamar a var antes de inicializar, ela retorna undefined. se fizer isso com let, retorna erro
"hoisting é o comportamento padrao do js de mover declarações (de var) para o topo"
 */

console.log('a = ', a)
var a = 2
console.log('a = ', a)
